import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
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
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (!validateInput(enteredUsername) || !validateInput(enteredAge)) {
      setError({
        title: "Invalid input",
        message: "공백은 불가합니다.",
      });
      return;
    }
    // +를 붙여준 이유는 숫자형으로 변경시키기 위해서
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "나이는 1살 이상이여야합니다.",
      });
      return;
    }
    props.onAddUsers(enteredUsername, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
