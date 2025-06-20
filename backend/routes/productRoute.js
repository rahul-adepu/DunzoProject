const express = require("express");
const {
  addProducts,
  getProducts,
  getProductsByStore,
} = require("../controllers/productsController");
const router = express.Router();

router.post("/addProducts", addProducts);
router.get("/", getProducts);
router.get("/:storeId", getProductsByStore);

module.exports = router;
