import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [output, setOutput] = useState('');
  const specialChar = ["%", "*", "/", "-", "+", "="];

  const calculate = (btnValue) => {
    if (btnValue === "=" && expression !== "") {
      try {
        const result = eval(expression.replace("%", "/100"));
        setOutput(result);
        setDisplay(result);
        setExpression('');
      } catch (error) {
        setOutput('Error');
        setDisplay('Error');
        setExpression('');
      }
    } else if (btnValue === "AC") {
      setDisplay('0');
      setExpression('');
      setOutput('');
    } else if (btnValue === "DEL") {
      setDisplay(display.toString().slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else {
      if (display === "0" && specialChar.includes(btnValue)) return;
      setDisplay(display === '0' ? btnValue : display + btnValue);
      setExpression(expression + btnValue);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{expression || display}</div>
      <div className="buttons">
        <button className="operator" data-value="AC" onClick={() => calculate("AC")}>AC</button>
        <button className="operator" data-value="DEL" onClick={() => calculate("DEL")}>DEL</button>
        <button className="operator" data-value="%" onClick={() => calculate("%")}>%</button>
        <button className="operator" data-value="/" onClick={() => calculate("/")}>/</button>

        <button data-value="7" onClick={() => calculate("7")}>7</button>
        <button data-value="8" onClick={() => calculate("8")}>8</button>
        <button data-value="9" onClick={() => calculate("9")}>9</button>
        <button className="operator" data-value="*" onClick={() => calculate("*")}>*</button>

        <button data-value="4" onClick={() => calculate("4")}>4</button>
        <button data-value="5" onClick={() => calculate("5")}>5</button>
        <button data-value="6" onClick={() => calculate("6")}>6</button>
        <button className="operator" data-value="+" onClick={() => calculate("+")}>+</button>

        <button data-value="1" onClick={() => calculate("1")}>1</button>
        <button data-value="2" onClick={() => calculate("2")}>2</button>
        <button data-value="3" onClick={() => calculate("3")}>3</button>
        <button className="operator" data-value="-" onClick={() => calculate("-")}>-</button>

        <button data-value="0" onClick={() => calculate("0")}>0</button>
        <button data-value="00" onClick={() => calculate("00")}>00</button>
        <button data-value="." onClick={() => calculate(".")}>.</button>
        <button className="operator" data-value="=" onClick={() => calculate("=")}>=</button>
      </div>
    </div>
  );
}

export default Calculator;