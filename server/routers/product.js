const { addProduct, updateProduct, deleteProduct, getProduct } = require("../controllers/Product");

const router = require("express").Router();

router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.post("/addproduct", addProduct);
router.get("/getproduct", getProduct);

module.exports = router;
