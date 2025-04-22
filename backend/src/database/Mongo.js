const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dunzodatabase")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const storeSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    store: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    }
});

const UserCollection = mongoose.model("users", userSchema);
const StoreCollection = mongoose.model("stores", storeSchema);

module.exports = {
    UserCollection,
    StoreCollection
};
