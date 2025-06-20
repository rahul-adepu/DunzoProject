const mongoose = require('mongoose');

const MeatSchema = new mongoose.Schema({
    img: { type: String, required: true },
    store: { type: String, required: true },
    place: { type: String, required: true },
    distance: { type: String, required: true },
});

module.exports = mongoose.model('MeatAndFish', MeatSchema);
