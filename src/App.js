import React from "react";

function useState(initValue) {
  let state = initValue;

  const modifier = (newValue) => {
    if (typeof newValue === "function") {
      state = newValue(state);
    }

    state = newValue;
  };

  return [state, modifier];
}

const STOCK = 15;

function Counter() {
  const [value, setValue] = React.useState(1);
  const [time, setTime] = React.useState(0);

  const handleChange = (diff) => {
    setValue(value + diff);
  };

  // const start = () => {
  //   setInterval(tick, value);
  // };

  React.useEffect(() => {
    const tick = () => {
      console.log("NEW TIME!", time);
      setTime((t) => t + 1);
    };

    const id = setInterval(tick, value * 1000);

    return () => {
      clearInterval(id);
    };
  }, [value]);

  return (
    <>
      <div>
        <button onClick={() => handleChange(1)}>+1</button>
        <button onClick={() => handleChange(-1)}>-1</button>
      </div>
      <p>Intervalo: {value}</p>
      <p>{time}</p>
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
