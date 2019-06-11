import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}
