const express = require('express');
const multer  = require('multer')

const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  uploadCategoryImage,
  resizeImage,
  deleteAll,
} = require('../controllers/categoryController');
const {
  createCategoryValidator,
  getCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require('../utils/validators/categoryValidator');
const authController = require('../controllers/authController');

const subCategoryRoute = require('./subCategoryRoute');

const router = express.Router();
router.use('/:categoryId/subcategories', subCategoryRoute);
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
  .get(getCategories)
  .post(
    authController.auth,
    // authController.allowedTo('admin', 'manager'),
  upload.single('image'),

(req, res, next) => {
  console.log('====================');
  console.log('FILE:', req.file);
  console.log('BODY BEFORE:', req.body);

  if (req.file) {
    req.body.image = req.file.filename;
  }

  console.log('BODY AFTER:', req.body);
  console.log('====================');

  next();
},
    createCategoryValidator,
    createCategory
  )
  .delete(deleteAll);

router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(
    authController.auth,
    authController.allowedTo('admin', 'manager'),
   upload.single('image'),
    (req, res, next) => {
    if (req.file) {
      req.body.image = req.file.filename;
    }
    next();
  },
    updateCategoryValidator,
    updateCategory
  )
  .delete(
    authController.auth,
    authController.allowedTo('admin'),
    deleteCategoryValidator,
    deleteCategory
  );

module.exports = router;
