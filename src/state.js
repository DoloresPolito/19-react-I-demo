import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  const handleIncrese = () => {
    console.log("INCREASE!", count);
    setCount(count + 1);
  };

  const handleDecrease = () => {
    console.log("DECREASE!", count);
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <button onClick={handleIncrese}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
      <p>{count}</p>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <h3>React Hooks</h3>
      <Counter />
    </div>
  );
}

export default App;
