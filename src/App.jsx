import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlusOne = () => {
    setCounter(counter + 1);
  };

  const handleMinusOne = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>Count: {counter || 0}</h1>
        <div>
          <button onClick={handlePlusOne}>+1</button>
          <button onClick={handleMinusOne}>-1</button>
        </div>
      </header>
    </div>
  );
}

export default App;
