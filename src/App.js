import { useState } from "react";
import "./styles.css";

export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  function createDigits() {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  }

  const updateCalc = (value) => {
    if (ops.includes(value)) {
      if (calc === "" || ops.includes(calc.slice(-1))) {
        return;
      }
    } else {
      setResult(eval(calc + value).toString());
    }
    setCalc(calc + value);
  };

  const showResult = () => {
    setCalc(result);
  };

  const deleteInput = () => {
    if (calc === "") {
      return;
    }
    setCalc(calc.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>({result ? result : 0})</span> {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button
            onClick={() => {
              deleteInput();
            }}
          >
            DEL
          </button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button
            onClick={() => {
              showResult();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
