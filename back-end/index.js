require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());

const adminRouter = require("./Routes/admin.route");

//Import Users Route
const userRouter = require('./Routes/Users.Route');
//Import Products Route
const productsRouter = require('./Routes/Products.Router')
//Import Products Route
const cartRouter = require("./Routes/Carts.route");
//Import Review Route
const {reviewRouter} = require('./Routes/Review.route');

//For connecting to the database
const connection = require("./config/db");

//adminRouter
app.use("/admin", adminRouter);

//reviewRouter
app.use("/review", reviewRouter);

// For Users Router
app.use("/users", userRouter);

// For Products Router
app.use("/products", productsRouter);

// For Carts Router
app.use("/carts", cartRouter);

//Listening to the Server in 8080 port
app.listen(port, () => {
  connection();
  console.log(`Listening to the http://localhost:${port}`);
});
