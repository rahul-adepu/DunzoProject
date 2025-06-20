const Product = require("../models/ProductsModel");

exports.addProducts = async (req, res) => {
  try {
    const products = req.body;
    const result = await Product.insertMany(products);
    res.status(201).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding products", error: err.message });
  }
};

exports.getProductsByStore = async (req, res) => {
  const { storeId } = req.params;

  try {
    const products = await Product.find({ [`availability.${storeId}`]: true });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products available for this store." });
    }

    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};
