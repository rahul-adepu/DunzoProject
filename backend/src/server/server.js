const express = require('express');
const connectDB = require('./config/db');
const storeRoutes = require('./routes/storeRoutes');
const productRoutes = require('./routes/productRoute')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/', storeRoutes);
// Product Routes
app.use("/products", productRoutes); // Product routes

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
