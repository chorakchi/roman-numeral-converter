import React, { useState, useEffect } from "react";
import { RomanNumerals } from "./utility";
import "./App.css";

function App() {
  const [result, setResult] = useState<string | number>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isInteger, setIsInteger] = useState<boolean>(false);
  useEffect(() => {
    let Action = isInteger ? RomanNumerals.toRoman : RomanNumerals.fromRoman;
    setResult(Action(inputValue));
  }, [inputValue, isInteger]);
  return (
    <div className="App">
      <header className="App-header">
      <h3>Roman Numerals converter (auto detect)</h3>
      <h6>type your number and see the result below, only "IVXLCDM" and Number acceptable</h6>
        <input
        className="App-input"
          placeholder="type here your number ..."
          value={inputValue}
          onChange={(e) =>
            RomanNumerals.validator(e.target.value, setIsInteger, setInputValue)
          }
        />
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
