import React from "react";

// function useState(initValue) {
//   let state = initValue

//   const modifier = (newValue) => {
//     state = newValue
//   }

//   return [state, modifier]
// }

const STOCK = 15;

function Counter() {
  const [value, setValue] = React.useState(10);
  const [error, setError] = React.useState("");

  const handleIncrese = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    setValue(value - 1);
  };

  React.useEffect(() => {
    console.log("SIDE EFFECT!");
    if (value > STOCK) {
      setError("El numero seleccionado es mayor al stock disponible");
    } else {
      setError("");
    }
  }, [value]);

  return (
    <>
      <div>
        <button onClick={handleIncrese}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
      <p onClick={() => setError("Hubo un error")}>{value}</p>
      <p>{error}</p>
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
