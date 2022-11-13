const express = require("express");
const { find, findOne, findByIdAndUpdate } = require("./Carts.module");
const Router = express.Router();
const Cart = require("./Carts.module");
const Product = require("../Products/Products.module");

// add product to the cart url : (http://localhost:8080/carts/add)
Router.post("/add", async (req, res) => {
  try {
    let { token, productId } = req.body;
    if (!token || !productId) {
      res.status(404).send({ error: "Sorry!" });
    }
    let getValue = token.split(":");
    let userId = getValue[0];

    let isCart = await Cart.findOne({ productId, userId });

    if (isCart) {
      let updateCount = await Cart.findByIdAndUpdate(
        isCart._id,
        { count: isCart.count + 1 },
        { new: true }
      );
      res.status(201).send("update");
    } else {
      let product = await Product.findOne({ _id: productId });

      if (product) {
        let carts = await Cart.create({ userId, productId, product });
        if (carts) {
          res.status(201).send("Added");
        }
      }
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// add product to the cart url : (http://localhost:8080/carts/get)
Router.post("/get", async (req, res) => {
  try {
    let { token } = req.body;
    if (!token) {
      res.status(404).send({ error: "Sorry!" });
    }
    let getValue = token.split(":");
    let userId = getValue[0];

    let userProduct = await Cart.find({ userId });
    if (userProduct.length > 0) {
      let getProduct = await Product.findById();
      res.status(201).send(userProduct);
    } else {
      res.status(201).send("");
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!", mes: error });
  }
});

// add product to the cart url : (http://localhost:8080/carts/delete)
Router.delete("/delete/:id", async (req, res) => {
  try {
    // let {token} = req.body;
    let id = req.params.id;
    // if(!token){
    //     res.status(404).send({error : "Sorry!"});
    // }
    // let getValue = token.split(":");
    // let userId = getValue[0];
    let isCheck = await Cart.findOneAndDelete(id);
    if (isCheck) {
      res.status(201).send("Deleted Successfully!");
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!", mes: error });
  }
});

// add product to the cart url : (http://localhost:8080/carts/update/:id)
Router.patch("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let isExists = await Cart.findOne({ _id: id });
    if (!isExists) {
      res.status(404).send({ msg: "Sorry can't updated!" });
    }

    if (isExists.count > 1) {
      let update = await Cart.findByIdAndUpdate(
        id,
        { count: isExists.count - 1 },
        { new: true }
      );
      res.status(201).send({ msg: "updated" });
    } else {
      let update = await Cart.findByIdAndDelete(id);
      res.status(201).send({ msg: "Deleted" });
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!", mes: error });
  }
});

// delete all cart items to the cart url : (http://localhost:8080/carts/userCartDelete)
Router.post("/userCartDelete", async (req, res) => {
  try {
    let { token } = req.body;
    if (!token) {
      res.status(404).send({ error: "Sorry!" });
    }
    let getValue = token.split(":");
    let userId = getValue[0];

    let userCartDelete = await Cart.deleteMany({ userId });
    if (userCartDelete) {
      res.status(201).send("Delete Successfully");
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!", mes: error });
  }
});

module.exports = Router;
