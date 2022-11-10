const express = require('express');
const Router = express.Router();

//Import Users Module
const User = require('./Users.model');

// User Sign-up at url (http://localhost:8080/users/signup)
Router.post("/signup", async (req, res) =>{
    try {
        let {first_name, last_name, email , password} = req.body;

        //Check if any input field is empty
        if(!email || !password || !first_name || !last_name){
            res.status(404).send("Opps! Fill The all input field");
        }

        let isEmail = await User.findOne({email});
        //Check if the email exists
        if(isEmail){
            res.status(404).send("This Email already Exists!");
        }

        let user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(404).send({error : "Something Went Wrong!", backendError : error});
    }
});

// User Login at url (http://localhost:8080/users/login)
Router.post("/login", async (req, res) =>{
    try {
        let {email , password} = req.body;
        //Check if any input field is empty
        if(!email || !password){
            res.status(404).send("Opps! Fill The all input field");
        }
        let isEmail = await User.findOne({email});
        //Check if the email exists
        if(!isEmail){
            res.status(404).send("Opps! You have to login first!");
        }
        //Check if password is wrong
        if(isEmail.password !== password){
            res.status(404).send("Wrong Password")
        }
        let token = `${isEmail._id}:${isEmail.role}`;

        res.cookie("next-food", token)
        // if all criteria are pass then send the token
        res.status(201).send("Login Successfull!");
       
    } catch (error) {
        res.status(404).send({error : "Something Went Wrong!"});
    }
});


module.exports = Router;