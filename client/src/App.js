import './App.css';
import React from 'react';
import UsersData from './components/GetUsersData';
import CreateUser from './components/CreateUser';

function App() {

  return (
    <div className="App">
      <UsersData />
      <CreateUser />
    </div>
  );
}

export default App;