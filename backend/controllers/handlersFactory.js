const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const ApiFeatures = require('../utils/apiFeatures');

const setImageUrl = (doc) => {
  if (doc.imageCover) {
    const imageCoverUrl = `${process.env.BASE_URL}/images/${doc.imageCover}`;
    doc.imageCover = imageCoverUrl;
  }
  if (doc.images) {
    const images = [];
    doc.images.forEach((image) => {
      const imageUrl = `${process.env.BASE_URL}/images/${image}`;
      images.push(imageUrl);
    });
    doc.images = images;
  }
};

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
      next(
        new ApiError(`No document found for this id: ${req.params.id}`, 404)
      );
    }
    // To trigger 'remove' event when delete document
    // document.remove();
    // 204 no content
    res.status(204).send();
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    console.log("updateeeeeeeeeeeeeeeeeeee")
    console.log("bodyyyyyyyy",req.body)
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!document) {
      return next(
        new ApiError(`No document found for this id: ${req.params.id}`, 404)
      );
    }

    // To trigger 'save' event when update document
    const doc = await document.save();

    if (doc.constructor.modelName === 'Product') {
      setImageUrl(doc);
    }
    res.status(200).json({ data: doc });
  });

exports.createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);

    if (newDoc.constructor.modelName === 'Product') {
      setImageUrl(newDoc);
    }
    res.status(201).json({ data: newDoc });
  });

exports.getOne = (Model, populateOpts) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    // Build query
    let query = Model.findById(id);
       if (Model.collection.collectionName === 'products') {
      query = query.populate('brand').populate('category').populate('subcategory');
    }
      if (Model.collection.collectionName === 'carts') {
          //  console.log("model",Model.collection.collectionName)

      query = query.populate('products.product');
    }
  
    if (populateOpts) query = query.populate(populateOpts);
    
console.log("pppppppppppppppppppppppppppppppppppppppp")
    // Execute query
    const document = await query;

    if (!document) {
      return next(new ApiError(`No document for this id ${id}`, 404));
    }

    if (document.constructor.modelName === 'Product') {
      setImageUrl(document);
    }
     if (document.constructor.modelName === 'Cart') {
     document.products.map((item)=>{
      if(item.product){
              console.log("BEFORE =", item.product.imageCover);

        console.log("good")
              setImageUrl(item.product);
                    console.log("Befoooooore =", item.product.imageCover);


      }
     })

    }
    res.status(200).json({ data: document });
  });

exports.getAll = (Model, modelName = '') =>
  asyncHandler(async (req, res) => {
    console.log("popo")
    let filter = {};
    if (req.filterObject) {
      filter = req.filterObject;
    }
    console.log("REQ QUERY =", req.query);
console.log("FILTER =", filter);
   let query=Model.find(filter)
     if (Model.collection.collectionName === 'products') {
      query = query.populate('brand');
    }
    // Build query
    // const documentsCounts = await Model.countDocuments();
    const apiFeatures = new ApiFeatures(query, req.query)
      .filter()
      .search(modelName)
      .limitFields()
      .sort();
    // .paginate();

    // Apply pagination after filer and search
    const docsCount = await Model.countDocuments(apiFeatures.mongooseQuery);
    apiFeatures.paginate(docsCount);

    // Execute query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents = await mongooseQuery;
    console.log("lolo")
console.log("BRAND PRODUCT =", documents[0]?.brand);
    // Set Images url
    if (Model.collection.collectionName === 'products') {
      documents.forEach((doc) => setImageUrl(doc));
    }
    res
      .status(200)
      .json({ results: docsCount, paginationResult, data: documents });
  });

exports.deleteAll = (Model) =>
  asyncHandler(async (req, res, next) => {
    await Model.deleteMany();
    // 204 no content
    res.status(204).send();
  });
