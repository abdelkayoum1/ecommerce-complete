const asyncHandler = require('express-async-handler');
// const stripe = require('stripe')(process.env.Chargily_SECRET_KEY);

const ApiError = require('../utils/apiError');
const factory = require('./handlersFactory');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const Cart = require('../models/cartModel');
const Order = require('../models/orderModel');
const crypto = require('crypto');


// @desc    Create new order
// @route   POST /api/orders/cartId
// @access  Private/Protected/User
exports.createCashOrder = asyncHandler(async (req, res, next) => {
  // app settings
  const taxPrice = 0;
  const shippingPrice = 0;

  // 1) Get logged user cart
  const cart = await Cart.findById(req.params.cartId);
  if (!cart) {
    return next(
      new ApiError(`There is no cart for this user :${req.user._id}`, 404)
    );
  }

  // 2) Check if there is coupon apply
  const cartPrice = cart.totalAfterDiscount
    ? cart.totalAfterDiscount
    : cart.totalCartPrice;

  // 3) Create order with default cash option
  const order = await Order.create({
    user: req.user._id,
    cartItems: cart.products,
    shippingAddress: req.body.shippingAddress,
    totalOrderPrice: taxPrice + shippingPrice + cartPrice,
  });

  // 4) After creating order decrement product quantity, increment sold
  // Performs multiple write operations with controls for order of execution.
  if (order) {
    const bulkOption = cart.products.map((item) => ({
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    }));

    await Product.bulkWrite(bulkOption, {});

    // 5) Clear cart
    await Cart.findByIdAndDelete(req.params.cartId);
  }

  res.status(201).json({ status: 'success', data: order });
});

// @desc    Get Specific order
// @route   GET /api/orders/:id
// @access  Private/Protected/User-Admin
exports.getSpecificOrder = factory.getOne(Order);

exports.filterOrdersForLoggedUser = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'user') req.filterObject = { user: req.user._id };
  next();
});

// @desc    Get my orders
// @route   GET /api/orders
// @access  Private/Protected/User-Admin
exports.getAllOrders = factory.getAll(Order);

// @desc    Update  order to  paid
// @route   PUT /api/orders/:id/pay
// @access  Private/Protected/User-Admin
exports.updateOrderToPaid = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(
      new ApiError(`There is no order for this id: ${req.params.id}`, 404)
    );
  }

  order.isPaid = true;
  order.paidAt = Date.now();

  const updatedOrder = await order.save();
  res.status(200).json({
    status: 'Success',
    data: updatedOrder,
  });
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
exports.updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(
      new ApiError(`There is no order for this id: ${req.params.id}`, 404)
    );
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();
  res.status(200).json({ status: 'Success', data: updatedOrder });
});

// @desc    Create order checkout session
// @route   GET /api/orders/:cartId
// @access  Private/User
exports.checkoutSession = asyncHandler(async (req, res, next) => {
  // 1) Get the currently cart
  const cart = await Cart.findById(req.params.cartId);
  if (!cart) {
    return next(
      new ApiError(`There is no cart for this user :${req.user._id}`, 404)
    );
  }

  // 2) Get cart price, Check if there is coupon apply
  const cartPrice = cart.totalAfterDiscount
    ? cart.totalAfterDiscount
    : cart.totalCartPrice;

  // 3) Create checkout session
  const response =  await fetch(
    'https://pay.chargily.net/test/api/v2/checkouts',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.Chargily_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: cartPrice,
        currency: 'dzd',
        payment_method: 'edahabia',
        success_url: 'http://localhost:3000/user/allorders',
        failure_url: 'http://localhost:3000/cart',
        webhook_endpoint: 'http://localhost:5000/api/v1/orders/webhook-checkout',
        description: `Order for ${req.user.name}`,
        locale: 'ar',
        metadata: 
          {
            cartId: req.params.cartId,
            userId: req.user._id.toString(),
          },
        
      }),
    }
  );

  const session = await response.json();

  // 4) Return checkout
  res.status(200).json({
    status: 'success',
    session,
  });
});

  // res.redirect(303, session.url);

  // 3) Create session as response
  // res.status(200).json({
  //   status: 'success',
  //   session,
  // });


const createOrderCheckout = async (checkout) => {
  // 1) Get needed data from session
    const cartId = checkout.metadata?.cartId;
  const userId = checkout.metadata?.userId;

  if (!cartId || !userId) {
    throw new Error('Missing cartId or userId in checkout metadata');
  }

  // 2) Get Cart and User
  const cart = await Cart.findById(cartId);
  const user = await User.findById(userId);

  if (!cart) {
    throw new Error(`Cart not found: ${cartId}`);
  }

  if (!user) {
    throw new Error(`User not found: ${userId}`);
  }

  // 3) Create order
  const order = await Order.create({
    user: user._id,
    cartItems: cart.products,
    totalOrderPrice: checkout.amount,
    paymentMethodType: checkout.payment_method,
    isPaid: true,
    paidAt: Date.now(),
  });

  // 4) Decrease product quantity and increase sold
  if (order) {
    const bulkOption = cart.products.map((item) => ({
      updateOne: {
        filter: { _id: item.product },
        update: {
          $inc: {
            quantity: -item.count,
            sold: +item.count,
          },
        },
      },
    }));

    await Product.bulkWrite(bulkOption, {});

    // 5) Clear cart
    await Cart.findByIdAndDelete(cart._id);
  }

  return order;
};

// @desc    This webhook will run when stipe payment successfully paid
// @route   PUT /webhook-checkout
// @access  From stripe
exports.webhookCheckout = async(req, res, next) => {
 
  try {
    const signature = req.headers.signature;

    if (!signature) {
      return res.status(400).json({ message: 'Missing signature' });
    }

    const payload = JSON.stringify(req.body);

    const computedSignature = crypto
      .createHmac('sha256', process.env.Chargily_SECRET_KEY)
      .update(payload)
      .digest('hex');

    if (signature !== computedSignature) {
      return res.status(403).json({ message: 'Invalid signature' });
    }

    const event = req.body;

    if (event.type === 'checkout.paid') {
      const checkout = event.data;

      console.log('Payment successful:', checkout.id);
      
      // هنا لاحقًا نحدّث Order إلى paid


  await createOrderCheckout(checkout);
    }

    if (event.type === 'checkout.failed') {
      const checkout = event.data;

      console.log('Payment failed:', checkout.id);
    }

    res.status(200).json({});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

