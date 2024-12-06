const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors())

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/logicLoop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("failed to connect mongodb", err));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("Users", userSchema);

app.post("/signup", async (req, res) => {
  const { username, email, password} = req.body;

  if (!username || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  // Create a new user
  const newUser = new User({ username, email, password});

  try {
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    res.status(500).send("Error creating user: " + err.message);
  }
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
