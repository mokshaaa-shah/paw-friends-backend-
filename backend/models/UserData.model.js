import mongoose from "mongoose";

const userData = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, unique: true },
  sex: String,
});

const User = mongoose.model("User", userData);

export default User;
