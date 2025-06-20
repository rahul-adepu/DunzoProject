const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  url: { type: String, required: true },
  name: { type: String, required: true },
  seller: { type: String },
  price: { type: Number, required: true },
  availability: { type: Map, of: Boolean },
});

module.exports = mongoose.model("Product", productSchema);
