const express = require('express');
const {
  createCashOrder,
  getSpecificOrder,
  filterOrdersForLoggedUser,
  getAllOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  checkoutSession,
    webhookCheckout,

} = require('../controllers/orderService');
const authController = require('../controllers/authController');

const router = express.Router();

// router.post('/webhook-checkout', (req, res) => {
//   console.log("333333333333333333333")

//   console.log("وصل الطلب للـ WEBHOOK");
//   console.log(req.body);

//   res.status(200).json({ received: true });
// });
// router.post('/webhook-checkout', (req, res, next) => {
//   console.log('WEBHOOK ROUTE REACHED');
//   next();
// }, webhookCheckout);
router.post('/webhook-checkout', webhookCheckout);
router.use(authController.auth);

router.get('/checkout-session/:cartId', checkoutSession);

router
  .route('/:cartId')
  .post(authController.allowedTo('user'), createCashOrder);

router
  .route('/')
  .get(
    authController.allowedTo('user', 'admin', 'manager'),
    filterOrdersForLoggedUser,
    getAllOrders
  );

router
  .route('/:id')
  .get(authController.allowedTo('user', 'admin', 'manager'), getSpecificOrder);

router.put('/:id/pay', updateOrderToPaid);
router.put('/:id/deliver', updateOrderToDelivered);

module.exports = router;
