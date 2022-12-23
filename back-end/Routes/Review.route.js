const express = require('express');
const reviewRouter = express.Router();
const {reviewModel} = require('../Models/Review.model')

reviewRouter.post("/", async(req, res) =>{
    try {
        let {productId, userId, comment} = req.body;
        if(!productId || !userId || !comment){
            res.status(404).send({msg : "Sorry! You Have to Login First"});
        }
        let reviewData = await reviewModel.create(req.body);
        res.send({msg : "Thank You for your Review!"})
    } catch (error) {
        res.status(500).send({msg : "Somthing wen't Wrong"})
    }
});

reviewRouter.get("/:productId", async(req, res) =>{
    try {
        let productId = req.params.productId;
        let reviewData = await reviewModel.find({productId});
        res.send(reviewData);
    } catch (error) {
        res.status(500).send({msg : "Somthing wen't Wrong"})
    }
})


module.exports = {reviewRouter};