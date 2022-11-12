const express = require("express");
const Router = express.Router();
//Import Products Module
const Product = require("./Products.module");

// Get The all Products into the database at url (http://localhost:8080/products/get)
Router.get("/get", async (req, res) => {
  try {
    let allProducts = await Product.find();
    res.status(201).send(allProducts);
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// Get The all Products into the database at url (http://localhost:8080/products/post)
Router.post("/post", async (req, res) => {
  try {
    let {
      token,
      title,
      subImg,
      rating,
      price,
      description,
      img,
      ingredientsTyps,
      protein,
      subTitle,
      calorie,
      carbs,
      totalFat,
      ingredients,
    } = req.body;
    let getValue = token.split(":");
    let adminId = getValue[0];
    let role = getValue[1];
    if (!token) {
      res.status(404).send("You are not Admin!");
    }
    //  if (
    //    !subImg ||
    //    !title ||
    //    !subTitle ||
    //    !calorie ||
    //    !description ||
    //    !img ||
    //    !ingredients ||
    //    !protein ||
    //    !carbs ||
    //    !totalFat
    //  ) {
    //    res.status(404).send("Plz Fill the all input!");
    //  }
    if (role !== "admin") {
      res.status(404).send("You cun't add products");
    }
    let product = await Product.create({
      title,
      rating,
      price,
      subImg,
      description,
      img,
      ingredientsTyps,
      protein,
      subTitle,
      calorie,
      carbs,
      totalFat,
      ingredients,
      adminId,
    });
    if (product) {
      res.status(201).send(product);
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// Get The all Products into the database at url (http://localhost:8080/products/update)
Router.patch("/update/:id", async (req, res) => {
  try {
    //  let product = await Product.findByIdAndRemove();
    let id = req.params.id;
    let {
      token,
      title,
      subTitle,
      img,
      subImg,
      description,
      rating,
      price,
      carbs,
      totalFat,
      protein,
      calorie,
    } = req.body;
    if (!token) {
      res.status(404).send("You are not Admin!");
    }
    let getValue = token.split(":");
    let adminId = getValue[0];
    let role = getValue[1];
    if (role !== "admin") {
      res.status(404).send("You cun't update products");
    }
    let isProducts = await Product.findOne({ _id: id });
    if (isProducts) {
      if (isProducts.adminId == adminId) {
        ////////////////////////////////////////////////////////////////////////////
        let newData = {};
        if (title) {
          newData.title = title;
        }
        if (subTitle) {
          newData.subTitle = subTitle;
        }
        if (img) {
          newData.img = img;
        }
        if (subImg) {
          newData.subImg = subImg;
        }
        if (description) {
          newData.description = description;
        }
        if (rating) {
          newData.rating = rating;
        }
        if (price) {
          newData.price = price;
        }
        if (calorie) {
          newData.calorie = calorie;
        }
        if (carbs) {
          newData.carbs = carbs;
        }
        if (totalFat) {
          newData.totalFat = totalFat;
        }
        if (protein) {
          newData.protein = protein;
        }

        let update = await Product.findByIdAndUpdate(id, newData, {
          new: true,
        });

        ////////////////////////////////////////////////////////////////////////////////
        if (update) {
          res.status(201).send("Update Successfully!");
        }
      } else {
        res.status(404).send("Product Not Exists!");
      }
    } else {
      res.status(404).send("Product Not Exists!");
    }
    res.status(201).send(product);
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!", backendErr: error });
  }
});

// Get The all Products into the database at url (http://localhost:8080/products/delete)

Router.delete("/delete/:id", async (req, res) => {
  try {
    let id = req.params.id;
    //  let { token } = req.body;
    //  if (!token) {
    //    res.status(404).send("You are not Admin!");
    //  }
    //  let getValue = token.split(":");
    //  let adminId = getValue[0];
    //  let role = getValue[1];
    //  if (role != "admin") {
    //    res.status(404).send("You are not Admin!");
    //  }
    let isProducts = await Product.findOne({ _id: id });
    let product = await Product.find();
    if (isProducts) {
      // if (isProducts.adminId == adminId) {
      let deleteProduct = await Product.findByIdAndDelete(id, { new: true });

      if (deleteProduct) {
        res.status(201).send(product);

      }
      // } else {
      //   res.status(404).send("Product Not Exists!");
      // }
    } else {
      res.status(404).send("Product Not Exists!");
    }

    //  let product = await Product.findByIdAndDelete({_id, adminId});
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// Get The admin Products into the database at url (http://localhost:8080/products/get/admin)
Router.post("/get/admin", async (req, res) => {
  let { limit = 5, page = 1 } = req.query;
  try {
    let { token } = req.body;
    if (!token) {
      res.status(404).send("You are not Admin!");
    }
    let getValue = token.split(":");
    let adminId = getValue[0];
    let role = getValue[1];
    if (role != "admin") {
      res.status(404).send("You are not Admin!");
    }
    let adminProducts = await Product.find({ adminId })
      .limit(limit)
      .skip((page - 1) * limit);
    if (adminProducts.length > 0) {
      res.status(201).send(adminProducts);
    } else {
      res.status(404).send("Plz add a Product First!");
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// Get The admin Products into the database at url (http://localhost:8080/products/singleGet/:id)
Router.get("/singleGet/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let isExists = await Product.findById(id);
    if (isExists) {
      res.status(201).send(isExists);
    } else {
      res.status(401).send("Sorry!");
    }
  } catch (error) {
    res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// only
module.exports = Router;
