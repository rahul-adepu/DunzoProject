const mongoose = require("mongoose");

const groceriesAndEssentialsSchema = new mongoose.Schema({
  img: { type: String, required: true },
  store: { type: String, required: true },
  place: { type: String, required: true },
  distance: { type: String, required: true },
  availableProducts: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      isAvailable: { type: Boolean, default: true },
    },
  ],
});

module.exports = mongoose.model(
  "GroceriesAndEssentials",
  groceriesAndEssentialsSchema
);
