import React from "react";
import "./ExpenseItem.css"; // CSS 파일을 import 하는방법

function ExpenseItem() {
  return (
    // class대신 className을 사용해야한다. Class는 자바스크립트 예약어이기대문에
    <div className="expense-item">
      <div>March 27th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$300</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

/**
 * JSX문법을 사용하여 리턴할때는 꼭 최상위 html태그는 한개만 있어야한다.
 */
