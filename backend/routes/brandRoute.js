const express = require('express');
const {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
  uploadBrandImage,
  resizeImage,
  deleteAll,
} = require('../controllers/brandController');
const {
  createBrandValidator,
  getBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require('../utils/validators/brandValidator');

const authController = require('../controllers/authController');
const multer  = require('multer')

const router = express.Router();
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
  .get(getBrands)
  .post(
    // authController.auth,
    // authController.allowedTo('admin', 'manager'),
  upload.single('image'),
    (req, res, next) => {
    if (req.file) {
      req.body.image = req.file.filename;
    }
    next();
  },
    createBrandValidator,
    createBrand
  )
  .delete(deleteAll);

// router.use(idValidation);
router
  .route('/:id')
  .get(getBrandValidator, getBrand)
  .put(
    authController.auth,
    authController.allowedTo('admin', 'manager'),
    uploadBrandImage,
    resizeImage,
    updateBrandValidator,
    updateBrand
  )
  .delete(
    authController.auth,
    authController.allowedTo('admin'),
    deleteBrandValidator,
    deleteBrand
  );

module.exports = router;
