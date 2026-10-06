const express = require('express');
const {
  addProductToWishlist,
  removeProductFromWishlist,
  myWishlist,
} = require('../controllers/wishlistController');

const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(authController.auth,authController.allowedTo("user"), addProductToWishlist)
  .get(authController.auth,authController.allowedTo("user"), myWishlist);

router.delete('/:productId', authController.auth,authController.allowedTo("user"), removeProductFromWishlist);

module.exports = router;
