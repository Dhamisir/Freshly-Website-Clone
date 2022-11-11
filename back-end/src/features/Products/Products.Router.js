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

// Get The all Products into the database at url (http://localhost:8080/products/post)
Router.post("/post", async (req, res) =>{
   try {
      let {token, title, rating, price, description, img, ingredientsTyps, protein, subTitle, calorie, carbs, totalFat, ingredients} = req.body;
      let getValue = token.split(":");
      let adminId = getValue[0];
      let role = getValue[1];
      if(!token){
         res.status(404).send("You are not Admin!");
      }
      if(!title || !subTitle || !calorie || !description || !img || !ingredients || !protein || !carbs || !totalFat){
         res.status(404).send("Plz Fill the all input!");
      }
      if(role !== "admin"){
         res.status(404).send("You cun't add products");
      }
    let product = await Product.create({
      title, rating, price, description, img, ingredientsTyps, protein, subTitle, calorie, carbs, totalFat, ingredients, adminId
    });
   if(product){
       res.status(201).send(product);
   }
   } catch (error) {
    res.status(404).send({error : "Something Went Wrong!"});
   }
});

// Get The all Products into the database at url (http://localhost:8080/products/update)
Router.patch("/update", async (req, res) =>{
   try {
    let product = await Product.find();
    res.status(201).send(product);
   } catch (error) {
    res.status(404).send({error : "Something Went Wrong!"});
   }
});

// Get The all Products into the database at url (http://localhost:8080/products/delete)
Router.delete("/delete/:id", async (req, res) =>{
   try {
      let _id = req.params.id;
      let {token} = req.body;
      if(!token){
         res.status(404).send("You are not Admin!");
      }
      let getValue = token.split(":");
      let adminId = getValue[0];
      let role = getValue[1];
      if(role != "admin"){
         res.status(404).send("You are not Admin!");
      }
      let isProducts = await Product.findOne({_id});
      if(isProducts){
         if(isProducts.adminId == adminId){
            let deleteProduct = await Product.findByIdAndDelete({_id});
            if(deleteProduct){
               res.status(201).send("Delete Successfully!");
            }
         }else{
            res.status(404).send("Product Not Exists!")
         }
      }else{
         res.status(404).send("Product Not Exists!")
      }
      
   //  let product = await Product.findByIdAndDelete({_id, adminId});
   //  res.status(201).send(product);
   } catch (error) {
    res.status(404).send({error : "Something Went Wrong!"});
   }
});

// Get The admin Products into the database at url (http://localhost:8080/products/get/admin)
Router.get("/get/admin", async (req, res) =>{
   try {
      let {token} = req.body;
      if(!token){
         res.status(404).send("You are not Admin!");
      }
      let getValue = token.split(":");
      let adminId = getValue[0];
      let role = getValue[1];
      if(role != "admin"){
         res.status(404).send("You are not Admin!");
      }
       let adminProducts = await Product.find({adminId});
      if(adminProducts.length > 0){
         res.status(201).send(adminProducts);
      }else{
         res.status(404).send("Plz add a Product First!");
      }
  
   } catch (error) {
    res.status(404).send({error : "Something Went Wrong!"});
   }
});

module.exports = Router;