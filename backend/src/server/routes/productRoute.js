const express = require("express");
const { addProducts, getProducts, getProductsByStore } = require("../controllers/productsController");
const router = express.Router();

router.post("/addProducts", addProducts); // Add products
router.get("/", getProducts); // Get all products (optional)
router.get("/:storeId", getProductsByStore); // Get products for a specific store


module.exports = router;
