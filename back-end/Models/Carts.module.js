const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user" || "admin"
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    product :{
        type : Object,
        required : true
    },
    count : {
        type : Number,
        min : 1,
        default : 1
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
