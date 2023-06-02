import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const validateInput = (value) => {
    if (value.trim().length === 0) {
      console.log(`공백없이 입력해주세요`);
      return false;
    }
    return true;
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!validateInput(username) || !validateInput(age)) {
      setError({
        title: "Invalid input",
        message: "공백은 불가합니다.",
      });
      return;
    }
    // +를 붙여준 이유는 숫자형으로 변경시키기 위해서
    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "나이는 1살 이상이여야합니다.",
      });
      return;
    }
    props.onAddUsers(username, age);
    setUsername("");
    setAge("");
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageHanlder = (e) => {
    setAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClose={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageHanlder}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
