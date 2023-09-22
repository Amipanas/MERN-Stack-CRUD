const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/UsersManagment');
const cors = require('cors');

// This line of code using 'express.json()' to making an atomation parsing and jsoning
app.use(express.json());
// This line of code using 'cors()' to making the APIs between Front-End & Back-End
app.use(cors());

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@mycluster.wwk4shk.mongodb.net/MERNDataBase`;
mongoose.connect(connectionString);

// Finding for our users from database asyncronus
async function myUsers(){
  const Users = await UserModel.find({})
  return Users;
}

// Getting users info from database by 'GET' method
app.get ("/getUsers", function( req, res ) {
  // Getting users info and handling probably errors and the server response
  myUsers().then(function(err,FoundedItems){
    if(err){ res.json(err) }
    else{ res.json(FoundedItems) }
  });
})

// Creating new user in DB by 'POST' method
app.post("/createUser", async function(req, res){
  // Getting the user data from the body of our request
  const user = req.body;
  // Creating a new user by the standard of our user model
  const newUser = new UserModel(user);
  // Waiting for creating and saving new user
  await newUser.save();

  res.json(user);
})

app.listen(3002, () => {
  console.log("SERVER RUNS ON PORT:3002");
});