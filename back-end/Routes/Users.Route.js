const express = require("express");
const Router = express.Router();

//Import Users Module
const User = require("../Models/Users.model");

// User Sign-up at url (http://localhost:8080/users/signup)
Router.post("/signup", async (req, res) => {
  try {
    let { first_name, last_name, email, password } = req.body;

    //Check if any input field is empty
    if (!email || !password || !first_name || !last_name) {
      res.status(404).send({msg : "Opps! Fill The all input field"});
    }

    let isEmail = await User.findOne({ email });
    //Check if the email exists

    if (isEmail) {
      res.status(404).send({ msg: "This Email Already Exists!" });
    }

    let user = await User.create(req.body);
    res.status(200).send({msg : "Signup Successfully"});
  } catch (error) {
    res
      .status(404)
      .send({ msg: "Something Went Wrong!", backendError: error });
  }
});

// User Login at url (http://localhost:8080/users/login)
Router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    //Check if any input field is empty
    if (!email || !password) {
      res.status(404).send({msg : "Opps! Fill The all input field"});
    }
    let isEmail = await User.findOne({ email });
    //Check if the email exists
    if (!isEmail) {
      res.status(404).send({msg : "Opps! You have to login first!"});
    }
    //Check if password is wrong
    if (isEmail.password !== password) {
      res.status(404).send({msg : "Opps! please enter right credintial"});
    }
    let token = `${isEmail._id}:${isEmail.role}`;

    res.cookie("next-food", token);
    // if all criteria are pass then send the token
    res.status(200).send({msg : "Successfully Login", token: `${isEmail._id}:${isEmail.role}` });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

// Get all the user to the admin page at url (http://localhost:8080/users/allUser)
Router.get("/allUser", async (req, res) => {
  let { limit = 5, page = 1 } = req.query;
  try {
    let allUses = await User.find()
      .limit(limit)
      .skip((page - 1) * limit);
    if (allUses) {
      res.status(200).send(allUses);
    }
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

// Delete user (http://localhost:8080/users/delete/:id)
Router.delete("/delete/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let isUser = await User.findOne({ _id: id });
    // let user = await User.find();
    

    if (isUser) {
      let deleteUser = await User.findByIdAndDelete(id, { new: true });
      let user = await User.find();
        res.status(200).send(user);
 
    } else {
      res.status(404).send({msg : "User Not Exists!"});
    }
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

module.exports = Router;
