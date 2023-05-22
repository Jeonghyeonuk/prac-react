import ExpenseItem from "./components/ExpenseItem"; // 사용할 컴포넌트를 가져온다.

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
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
