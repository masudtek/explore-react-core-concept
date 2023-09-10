import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./Users";
import Friends from "./friends";

function App() {
  function handaleClick() {
    alert("click me ");
  }
  const handaleclick2 = () => {
    alert("click 2 button ");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React core concept 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handaleClick}>Click Me</button>
      <button onClick={handaleclick2}>click2</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
