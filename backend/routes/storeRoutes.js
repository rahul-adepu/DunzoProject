const express = require("express");
const {
  addGroceries,
  addMeat,
  getGroceries,
  getMeat,
} = require("../controllers/storeControllers");

const { getStoreDetails } = require("../controllers/storeControllers");

const router = express.Router();

router.post("/groceries", addGroceries);
router.get("/groceries", getGroceries);

router.post("/meat", addMeat);
router.get("/meat", getMeat);

router.get("/:storeId", getStoreDetails);

module.exports = router;
