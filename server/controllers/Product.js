const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  req.body.userId = req.user._id;
  try {
    const { name, description, price, imagesUrl, category, stock } = req.body;
    if (!name || !description || !price || !imagesUrl || !category || !stock) {
      return res.status(404).json({ message: "Please fullfill your all input." });
    }
    const createProduct = new Product(req.body);
    await createProduct.save();
    return res.status(201).json({ message: "Product create successfull", createProduct });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
