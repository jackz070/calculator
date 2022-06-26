import React, { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [action, setAction] = useState("");
  const [calc, setCalc] = useState(0);

  const initialDisplay = 0;

  const result = (e) => {
    e.preventDefault();
    if (action === "addition") {
      setCalc(calc + display);
      setDisplay(calc + display);
    }
    if (action === "substraction") {
      setCalc(calc - display);
      setDisplay(calc - display);
    }
    if (action === "multiplication") {
      setCalc(calc * display);
      setDisplay(calc * display);
    }
    if (action === "division") {
      setCalc(calc / display);
      setDisplay(calc / display);
      if (display === 0) {
        setDisplay("Error");
      }
    }
    setAction("");
  };

  const setDisplay2 = (e) => {
    e.preventDefault();
    setDisplay((display) => parseInt(display + e.target.textContent, 10));
  };

  const clear = (e) => {
    e.preventDefault();
    setDisplay(initialDisplay);
    setCalc(initialDisplay);
    setAction("");
  };

  const operation = (e) => {
    e.preventDefault();
    setCalc(parseInt(display));
    setDisplay(initialDisplay);
    let operator = e.target.textContent;
    if (operator === "+") {
      setAction("addition");
    }
    if (operator === "-") {
      setAction("substraction");
    }
    if (operator === "x") {
      setAction("multiplication");
    }
    if (operator === "/") {
      setAction("division");
    }
  };

  return (
    <section>
      <form>
        <span>{display}</span>
        <button className="btn" onClick={clear}>
          C
        </button>
        <button className="btn" onClick={operation}>
          +
        </button>
        <button className="btn" onClick={operation}>
          -
        </button>
        <button className="btn" onClick={operation}>
          x
        </button>
        <button className="btn" onClick={operation}>
          /
        </button>
        <button className="btn" onClick={result}>
          =
        </button>
        <button className="btn" onClick={setDisplay2}>
          1
        </button>
        <button className="btn" onClick={setDisplay2}>
          2
        </button>
        <button className="btn" onClick={setDisplay2}>
          3
        </button>
        <button className="btn" onClick={setDisplay2}>
          4
        </button>
        <button className="btn" onClick={setDisplay2}>
          5
        </button>
        <button className="btn" onClick={setDisplay2}>
          6
        </button>
        <button className="btn" onClick={setDisplay2}>
          7
        </button>
        <button className="btn" onClick={setDisplay2}>
          8
        </button>
        <button className="btn" onClick={setDisplay2}>
          9
        </button>
        <button className="btn" onClick={setDisplay2}>
          0
        </button>
      </form>
    </section>
  );
}

export default App;
