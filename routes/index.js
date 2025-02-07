const { Router } = require("express");
const routes = Router();
const UserRouter = require("./UserRouter");
const AuthRouter = require("./AuthRouter");
const BannerRouter = require("./BannerRouter");
const ServiceRouter = require("./ServiceRouter");
const TransactionRouter = require("./TransactionRouter")

routes.use("/", UserRouter);
routes.use("/", AuthRouter);
routes.use("/", BannerRouter);
routes.use("/", ServiceRouter);
routes.use("/", TransactionRouter);

module.exports = routes;