import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);

  const addUsersHandler = (username, age) => {
    setEnteredUsers((prevState) => {
      return [...prevState, { username, age, id: Math.random().toString() }];
    });
  };
  return (
    <>
      <AddUsers onAddUsers={addUsersHandler}></AddUsers>
      <UsersList users={enteredUsers}></UsersList>
    </>
  );
}

export default App;
