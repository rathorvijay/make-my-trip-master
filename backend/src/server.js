const express = require("express");
const database = require("./config/db");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.port || 5000;
app.use(express.json());

app.use(cors({
  origin:`http://localhost:3000`,
  credentials:true
}))

// app.use(cors());
let userController = require("./controllers/user.controller");
let checkoutController = require("./controllers/checkout.controller");
let orderController = require("./controllers/order.controller");
let paymentController = require("./controllers/payment.controller");
let SuccessController = require("./controllers/success.controller");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users", userController);
app.use("/checkout", checkoutController);
app.use("/order", orderController);
app.use("/razorpay", paymentController);
app.use("/success", SuccessController);

const start = async () => {
  database.connect();
  app.listen(port, () => console.log(`app listening on port ${port}!`));
};

module.exports = start;
