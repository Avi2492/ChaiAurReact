import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(0);
  // let Counter = 5;
  const addValue = () => {
    // console.log("Value Added", Math.random());
    // console.log("Clicked", Counter);
    // Counter++;
    setCounter(Counter + 1);
  };
  const subValue = () => {
    // console.log("Clicked", Counter);
    // Counter--;
    setCounter(Counter - 1);
  };
  return (
    <>
      <h1>Chai aur react!</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={addValue}>Add Value: {Counter}</button>
      <br />
      <button onClick={subValue}>Sub Value: {Counter}</button>
      <p>Footer: {Counter}</p>
    </>
  );
}

export default App;

/**
 * Hooks Concept-> ui updation will control react
 * 1. // useState Hook => responsible to change the state, And this change will propagates in UI
 */

// Assignment -> Make a function so that when clicked on subtract so never goes on negative values and add values never goes above 20.
