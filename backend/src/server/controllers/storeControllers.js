const Groceries = require('../models/GroceriesAndEssentials');
const Meat = require('../models/MeatAndFish');
const GroceriesAndEssentials = require("../models/GroceriesAndEssentials");

// Add data to collections
exports.addGroceries = async (req, res) => {
    try {
        const groceryData = req.body;
        const result = await Groceries.insertMany(groceryData);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Error adding groceries', error: err.message });
    }
};

exports.addMeat = async (req, res) => {
    try {
        const meatData = req.body;
        const result = await Meat.insertMany(meatData);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Error adding meat', error: err.message });
    }
};

// Fetch data from collections
exports.getGroceries = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 4; // Default to 4 items per page
        const skip = (page - 1) * limit;

        const totalCount = await Groceries.countDocuments(); // Get the total count of documents
        const groceries = await Groceries.find().skip(skip).limit(limit); // Fetch paginated data

        res.status(200).json({
            stores: groceries,
            totalPages: Math.ceil(totalCount / limit),
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching groceries", error: err.message });
    }
};


exports.getMeat = async (req, res) => {
    try {
        const meat = await Meat.find({});
        res.status(200).json(meat);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching meat', error: err.message });
    }
};


// Fetch store details with product availability
exports.getStoreDetails = async (req, res) => {
    try {
        const { storeId } = req.params; // Get the store ID
        const store = await GroceriesAndEssentials.findById(storeId).populate(
            "availableProducts.product"
        );
        if (!store) {
            return res.status(404).json({ message: "Store not found" });
        }
        res.status(200).json(store);
    } catch (err) {
        res.status(500).json({ message: "Error fetching store details", error: err.message });
    }
};
