const express = require("express");
const Admin = require("./admin.model");
const router = express.Router();

// Admin signup
router.post("/signup", async (req, res) => {
  const { email, password, first_name, last_name, roall, avtar } = req.body;
  try {
    let existingUser = await Admin.findOne({ email });
    if (existingUser) {
      res.status(404).send("Connot create an user with exist");
    } else {
      let admin = await Admin.create({
        email,
        password,
        first_name,
        last_name,
        roall,
        avtar,
      });
      res.send({ token: `${admin.email}_$_${admin.password}` });
    }
  } catch (error) {
    res.status(404).send(e.massege);
  }
});

// Admin login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (admin) {
      if (password === admin.password) {
        res.send({
          token: `${email}_#_${password}`,
          admin,
        });
      } else {
        res.status(404).send("you are not admin,incorrect password");
      }
    } else {
      res.status(404).send(`Admin this ${email} id note found`);
    }
  } catch (error) {
    res.status(404).send(error.massege);
  }
});
module.exports = router;
