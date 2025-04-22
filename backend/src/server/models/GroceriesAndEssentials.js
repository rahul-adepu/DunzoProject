// const mongoose = require('mongoose');

// const GroceriesSchema = new mongoose.Schema({
//     img: { type: String, required: true },
//     store: { type: String, required: true },
//     place: { type: String, required: true },
//     distance: { type: String, required: true },
// });

// module.exports = mongoose.model('GroceriesAndEssentials', GroceriesSchema);

const mongoose = require("mongoose");

const groceriesAndEssentialsSchema = new mongoose.Schema({
    img: { type: String, required: true },   // Store image
    store: { type: String, required: true }, // Store name
    place: { type: String, required: true }, // Store location
    distance: { type: String, required: true }, // Distance from user
    availableProducts: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to product
            isAvailable: { type: Boolean, default: true } // Availability status
        }
    ]
});

module.exports = mongoose.model(
    "GroceriesAndEssentials",
    groceriesAndEssentialsSchema
);

