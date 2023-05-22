import ExpenseItem from "./components/ExpenseItem"; // 사용할 컴포넌트를 가져온다.

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        // 하위 컴포넌트에 속성으로 데이터를 전달하는걸 props라고 한다.
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      {/* 커스텀 컴포넌트는 반드시 대문자로 시작 하여야 한다.
      (소문자는 HTML 내장 컴포넌트 이기 때문에) */}
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
