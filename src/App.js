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

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="container is-max-desktop p-6">
      <form>
        <span className="box m-1 is-size-4">{display}</span>
        <span className="columns p-6">
          <span className="column">
            <button
              className="button is-warning  m-2 is-size-4"
              onClick={clear}
            >
              C
            </button>
            <button className="button m-2 is-size-4" onClick={operation}>
              +
            </button>
            <button className="button m-2 is-size-4" onClick={operation}>
              -
            </button>

            <button className="button m-2 is-size-4" onClick={operation}>
              x
            </button>
            <button className="button m-2 is-size-4" onClick={operation}>
              /
            </button>
            <button
              className="button m-2 is-size-4 is-primary"
              onClick={result}
            >
              =
            </button>
          </span>
          <span className="column is-three-quarters">
            {numbers.map((number) => (
              <button
                className="button m-2 is-size-4"
                onClick={setDisplay2}
                key={number}
              >
                {numbers[number]}
              </button>
            ))}
          </span>
        </span>
      </form>
    </section>
  );
}

export default App;
