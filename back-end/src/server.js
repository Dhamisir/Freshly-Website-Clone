require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const adminRouter = require("./features/admin/admin.route");
//For connecting to the database
const connection = require("./config/db");
connection();
//adminRouter
app.use("/admin", adminRouter);

//Listening to the Server in 8080 port
app.listen(port, () => {
  console.log(`Listening to the http://localhost:${port}`);
});
