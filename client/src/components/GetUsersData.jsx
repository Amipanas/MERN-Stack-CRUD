import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './getusersdata.css';

function GetAllUsers() {
  // Getting users data state
  const [ listOfUsers, setListOfUsers ] = useState([])

  // Getting the users data from DB
  useEffect(() => {
    Axios.get("http://localhost:3002/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className='users-main-box'>
      <h1>DB Users</h1>
      <div className='usersBox'>
        {listOfUsers.map( (user)=>{
          return (
            <div className="usersData">
              <h1>{user.username}</h1>
              <p>Username : {user.username}</p>
              <p>Name : {user.name}</p>
              <p>Age : {user.age}</p>
              <p>User's ID : {user._id}</p>
            </div>
          )
        } )}
      </div>
    </div>
    
  );
}


export default GetAllUsers;