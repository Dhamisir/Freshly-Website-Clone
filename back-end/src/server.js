require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());

const adminRouter = require("./features/admin/admin.route");

//Import Users Route
const userRouter = require('./features/Users/Users.Route');
//Import Products Route
const productsRouter = require('./features/Products/Products.Router')
//Import Products Route
const cartRouter = require("./features/Carts/Carts.route");


//For connecting to the database
const connection = require("./config/db");
connection();
//adminRouter
app.use("/admin", adminRouter);

// For Users Router
app.use("/users", userRouter);

// For Products Router
app.use("/products", productsRouter);

// For Carts Router
app.use("/carts", cartRouter)

//Listening to the Server in 8080 port
app.listen(port, () => {
  console.log(`Listening to the http://localhost:${port}`);
});
