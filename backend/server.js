const express = require("express");
const connectDB = require("./config/db");
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", storeRoutes);
app.use("/products", productRoutes);

const PORT = 8001;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
