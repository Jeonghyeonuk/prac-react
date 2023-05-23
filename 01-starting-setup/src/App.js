import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /**
   * jsx 더 자세히 알아보기
   * 아래에 return문이 만들어지는건 React.creatElement()함수로 만들어지는거고 첫번째인자는 태그, 두번째인자는 속성, 세번쩨인자는 태그 사이에 들어갈 내용이 온다.
   */
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { item: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;

/**
 * JSX 문법.
 * 자바스크립트에서 HTML문법을 사용한다.
 * 일반적으론 브라우저에서 지원하지 않지만, 이코드가 실행되기전에 백단에서 브라우저에서 동작하도록
 * 코드를 변형시켜준다.
 */
