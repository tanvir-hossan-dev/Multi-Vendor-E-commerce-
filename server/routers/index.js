const router = require("express").Router();
const userRouter = require("./auth");

router.use("/api/v1/auth", userRouter);

module.exports = router;
