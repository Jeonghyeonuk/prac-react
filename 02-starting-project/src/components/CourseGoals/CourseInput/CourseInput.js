import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

// styled-component 에서 자기 자신을 가르킬때는 셀렉터를 쓸필요가 없고 자식을가르키거나 수도셀렉터를
// 사용하기위할때는 & 표시를 쓴다
const FormControl = styled.div`
  margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color : ${(props) => (props.invalid ? "red" : "black")}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    font: inherit;
    backgroud-color : ${(props) => (props.invalid ? "#ffd7d7" : "transparent")}
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid ? "invalid" : ""}> */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
