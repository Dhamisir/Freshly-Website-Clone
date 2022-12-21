require("dotenv");
const mongoose = require("mongoose");
const url =
  process.env.DATABASE_URL ||
  `mongodb+srv://arjun:arjun@cluster0.yv7wj4c.mongodb.net/sophisticated-legs-486?retryWrites=true&w=majority`;
//   local
const localUrl = "mongodb://127.0.0.1:27017/";
const connection = () => {
  mongoose
    .connect(`${url}`)
    .then(() => {
      console.log("Connection Successful!");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connection;
