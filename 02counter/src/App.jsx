import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); // useState(React Property) to reflect at all places.
  // let counter = 15

  const addValue = () => {
    counter = counter + 1;
    if (counter < 20) {
      // Value not more than 20
      setCounter(counter);
      console.log("Clicked :", counter);
    } else {
      counter = 20;
      setCounter(counter);
      console.log("Clicked :", counter);
    }
  };

  const removeValue = () => {
    // Value not less than 0
    counter = counter - 1;
    if (counter > 0) {
      setCounter(counter);
      console.log("Clicked :", counter);
    } else {
      counter = 0;
      setCounter(counter);
      console.log("Clicked :", counter);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
