const express = require("express");
const {
  addProduct,
  getProducts,
  updateProduct,
  removeProduct,
} = require("../controller/productController");
// const { addProduct } = require("../controller/productController");
const router = express.Router();
// const { addProduct } = require("../controller/productController");

router.route("/").post(addProduct);
router.route("/").get(getProducts);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(removeProduct);
module.exports = router;
