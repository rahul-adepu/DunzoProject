const express = require('express');
const { addGroceries, addMeat, getGroceries, getMeat } = require("../controllers/storeControllers")

const { getStoreDetails } = require("../controllers/storeControllers");

const router = express.Router();

// Routes for groceries
router.post('/groceries', addGroceries);
router.get('/groceries', getGroceries);

// Routes for meat
router.post('/meat', addMeat);
router.get('/meat', getMeat);


router.get("/:storeId", getStoreDetails); // Get details for a specific store

module.exports = router;

// module.exports = router;
