const express = require("express");
const { UserCollection, StoreCollection } = require("./Mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test API
app.get("/", cors(), (req, res) => {
    res.send("Server is running");
});

// Login API
app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await UserCollection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Signup API
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password
    };

    try {
        const check = await UserCollection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await UserCollection.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

// API to Add Store Data
app.post("/addStores", async (req, res) => {
    const stores = req.body.stores; // Expecting an array of store objects

    try {
        await StoreCollection.insertMany(stores);
        res.json({ message: "Stores added successfully!" });
    } catch (e) {
        res.status(500).json({ message: "Failed to add stores", error: e.message });
    }
});

// API to Get Store Data
app.get("/getStores", async (req, res) => {
    try {
        const stores = await StoreCollection.find({});
        res.json(stores);
    } catch (e) {
        res.status(500).json({ message: "Failed to fetch stores", error: e.message });
    }
});

app.listen(8000, () => {
    console.log("port connected");
});
