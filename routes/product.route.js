const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// POST API TO ADD PRODUCT IN DATABASE
router.post("/", createProduct);
// GET API TO GET ALL PRODUCTS FROM DATABASE
router.get("/", getAllProducts);
// GET API TO GET A PARTICULAR PRODUCT BY ID
router.get("/:id", getProductById);
// PUT API TO UPDATE A PRODUCT
router.put("/:id", updateProduct);
// DELETE API TO DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;
