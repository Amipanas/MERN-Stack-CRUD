const mongoose = require("mongoose");

// Creating a schema of our users by mongoose
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
})

// Modeling our schema
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;