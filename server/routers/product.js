const { addProduct } = require("../controllers/Product");

const router = require("express").Router();

router.post("/addproduct", addProduct);

module.exports = router;
