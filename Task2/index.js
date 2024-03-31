const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/get-users", (req, res) => {
  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      const array = response.data.data;
      res.send(array);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.patch("/update-user", async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = response.data.data;

    const index = users.findIndex(
      (user) => user.first_name.charAt(0).toLowerCase() === "a"
    );

    if (index !== -1) {
      const userToUpdate = users[index];
      const newFirstName = req.body.first_name;

      userToUpdate.first_name = newFirstName;

      console.log(
        `Updating first name of user with ID ${userToUpdate.id} to ${newFirstName}`
      );

      res.json({
        message: `User with ID ${userToUpdate.id} updated successfully`,
      });
    } else {
      res
        .status(404)
        .json({ message: "No user found with first name starting with 'A'" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" }); 
  }
});

app.listen(PORT, () => {
  console.log("Listen to the port 5000");
});
