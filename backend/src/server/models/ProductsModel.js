const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    url: { type: String, required: true }, // Image URL
    name: { type: String, required: true }, // Product name
    seller: { type: String },              // Optional seller name
    price: { type: Number, required: true }, // Product price
    availability: { type: Map, of: Boolean }, // Map of storeId to availability
});

module.exports = mongoose.model("Product", productSchema);
