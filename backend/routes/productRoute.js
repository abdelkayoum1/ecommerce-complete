const express = require('express');
const multer  = require('multer')

const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImages,
  resizeProductImages,
} = require('../controllers/productController');
const {
  createProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require('../utils/validators/productValidator');

const authController = require('../controllers/authController');
const reviewRoute = require('./reviewRoute');

const router = express.Router();
console.log("PRODUCT ROUTE LOADED");
// POST  /products/n1b1213ga2/reviews
// GET   /products/n1b1213ga2/reviews
// GET   /products/n1b1213ga2/reviews/jjh132hh4
router.use('/:productId/reviews', reviewRoute);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename);
  }
})

const upload = multer({ storage: storage })
router
  .route('/')
  .get(getProducts)
  .post(
      (req, res, next) => {
      console.log("🔥 POST PRODUCT ARRIVED");
      next();
    },
    authController.auth,
    // authController.allowedTo('admin', 'manager'),
     upload.fields([
      { name: 'imageCover', maxCount: 1 },
      { name: 'images', maxCount: 8 },
    ]),
  (req, res, next) => {
  console.log('====================');
  console.log('FILE:', req.files);
  console.log('BODY BEFORE:', req.body);

  if (req.files) {
        console.log("kejjekejke")

    req.body.imageCover = req.files.imageCover[0].filename;
       console.log("IMAGE COVER:", req.body.imageCover);

  }

  console.log('BODY AFTER:', req.body);
  console.log('====================');
  if(   req.files && req.files.images){
    req.body.images=req.files.images.map((file)=>file.filename)
  }

  next();
},
    createProductValidator,
    createProduct
  );

// router.use(idValidation);
router
  .route('/:id')
  .get(getProductValidator, getProduct)
  .put(
    authController.auth,
    // authController.allowedTo('admin', 'manager'),
     upload.fields([
      { name: 'imageCover', maxCount: 1 },
      { name: 'images', maxCount: 8 },
    ]),
  (req, res, next) => {
  console.log('====================');
  console.log('FILE:', req.file);
  console.log('BODY BEFORE:', req.body);

  if (req.files) {
    req.body.imageCover = req.files.imageCover[0].filename;
    console.log("khelifa")
  }

  console.log('BODY AFTER:', req.body);
  console.log('====================');
  if(   req.files && req.files.images){
    req.body.images=req.files.images.map((file)=>file.filename)
  }

  next();
},
    // uploadProductImages,
    // resizeProductImages,
    updateProductValidator,
    updateProduct
  )
  .delete(
    authController.auth,
    // authController.allowedTo('admin'),
    deleteProductValidator,
    deleteProduct
  );

module.exports = router;
