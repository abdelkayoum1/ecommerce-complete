const express=require("express");




const subcategoryoncategory=require('../../backend/models/SubCategoryoncategory');
const Route=express.Router();




Route.get('/:id/subcategories', async (req, res) => {

  try {

    console.log("ID =", req.params.id);

    const subcategory = await subcategoryoncategory.find();

    console.log("كل البيانات =", subcategory);

    res.status(200).json({
      data: subcategory
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


module.exports=Route;