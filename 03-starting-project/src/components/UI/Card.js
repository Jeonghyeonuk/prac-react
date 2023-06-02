import React from "react";
import classes from "./Card.module.css"; //styled component 처럼 css module을 이용해서 지역 style을 지정 하는법

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
