import React, { useState } from 'react';
import Axios from 'axios';
import './createuser.css';

function CreateUser() {
  // Creating new user state
  const [ name, setName ] = useState("");
  const [ age, setAge ] = useState(0);
  const [ username, setUserName ] = useState("");

  // Creating users data in our DB
  const UserCreator = () => {
    Axios.post("http://localhost:3002/createUser", {
      name,
      age,
      username,
    }).then((response) => {console.log(response)});
    console.log("I'm Working...")
    console.log([
      name,
      age,
      username,
    ])
  };

  return (
    <div className='create-main-box'>
      <h1>User Creation</h1>
      <div className='Creation-box'>
        <div className='Creation-data'>
          <input type="text" placeholder="name..."  onChange={(event)=> { setName(event.target.value) }} />
          <input type="number" placeholder="age..." onChange={(event)=> { setAge(event.target.value) }}/>
          <input type="text" placeholder="username..."  onChange={(event)=> { setUserName(event.target.value) }} />
          <button >Create New User</button>
        </div>
        
      </div>
    </div>
    
  );
}

export default CreateUser;