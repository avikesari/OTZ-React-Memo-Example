import { useState } from "react";
import "./styles.css";
import Child from "./Child";

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h1> React Memo example </h1>
      <h2>
        {" "}
        Clicking Increment button will not render the Child component
        irrespective of state value change{" "}
      </h2>
      <div className="parent-counter">{counter}</div>
      <button className="parent-button" onClick={incrementCounter}>
        Increment
      </button>
      <Child />
    </div>
  );
}
