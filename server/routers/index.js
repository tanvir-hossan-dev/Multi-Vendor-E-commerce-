const router = require("express").Router();
const Authenticate = require("../middleware/Authenticate");
const userRouter = require("./auth");
const productRouter = require("./product");

router.use("/api/v1/auth", userRouter);
router.use("/api/v1/product", Authenticate, productRouter);

module.exports = router;
