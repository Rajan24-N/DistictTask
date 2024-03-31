const express = require("express");
const userModel = require("../schemas/UserSchema");
const router = new express.Router(); // instead of using app i can use the router.

// add a user
router.post("/add-user", async (req, res) => {
  try {
    const user = new userModel(req.body);
    const data = await user.save();
    console.log("After user");
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all user
try {
  router.get("/get-users", async (req, res) => {
    const users = await userModel.find().sort();
    res.status(200).send(users);
  });
} catch (error) {
  console.log(error);
}

// get particular user based on id
try {
  router.get("/get-users/:id", async (req, res) => {
    const _id = req.params.id;
    const data = await userModel.find({
      _id: _id,
    });
    res.status(200).send(data);
  });
} catch (error) {
  console.log(error);
}

// update the users based on id
try {
  router.patch("/update-user/:id", async (req, res) => {
    const _id = req.params.id;
    const data = await userModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(data);
  });
} catch (error) {
  console.log(error);
}

// delete users based on id
try {
  router.delete("delete-user/:id", async (req, res) => {
    const _id = req.params.id;
    const data = await userModel.findByIdAndDelete(_id);
    res.status.send(data);
  });
} catch (error) {
  console.log(error);
}

module.exports = router;
