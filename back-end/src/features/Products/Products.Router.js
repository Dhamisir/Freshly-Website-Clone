const express = require('express');
const Router = express.Router();
//Import Products Module
const Product = require('./Products.module');


// Get The all Products into the database at url (http://localhost:8080/products/get)
Router.get("/get", async (req, res) =>{
   try {
    let allProducts = await Product.find();
    res.status(201).send(allProducts);
   } catch (error) {
    res.status(404).send({error : "Something Went Wrong!"});
   }
});



module.exports = Router;