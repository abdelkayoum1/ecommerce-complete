const mongoose = require('mongoose');

const SubCategoryoncategory = new mongoose.Schema(
  {
     name: {
    type: String,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  }
);

// cartSchema.pre(/^find/, function (next) {
// this.populate({
//   path: 'products.product',
//   populate: { path: 'category', select: 'name', model: 'Category' },
// }).populate({
//     path: 'products.product',
//     populate: { path: 'brand', select: 'name', model: 'Brand' },
//   });
//   next();
// });

module.exports = mongoose.model('SubCategoryoncategory', SubCategoryoncategory);
