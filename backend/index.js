import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./dbConnector.js";
import UserController from "./controllers/user_data.controller.js";

const app = express();
const port = 8000;

// GET -- NEED SOME DATA
// POST --
// PUT -- UPDATE
// DELETE -- DELETE

// MIDDLEWARES

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Connects to the DB
connectDB();

// TEST API
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// USER DATA
app.get("/user_data", UserController.getAllUserData);
app.get("/user_data/:id", UserController.getUserDatabyId);
app.delete("/user_data/:id", UserController.deleteUser);
app.post("/user_data", UserController.createUser);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
