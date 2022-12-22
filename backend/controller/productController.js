const Product = require("../models/productModels");

//Add a product

exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      success: true,
      product: product,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json({
    message: "Success",
    products,
  });
};

exports.updateProduct = async (req, res) => {
  const productID = req.params.id;
  const product = await Product.findById(productID);
  if (!product) {
    res.status(404).json({
      success: false,
    });
  }
  let updateProduct = await Product.findByIdAndUpdate(productID, req.body, {
    new: true,
    runvalidators: true,
  });
  res.status(404).json({
    success: true,
    product: updateProduct,
  });
};

exports.removeProduct = async (req, res) => {
  const product = Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      success: false,
    });
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "The product is removed",
  });
};
