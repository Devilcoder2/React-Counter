import React, { useState } from "react";
import Display from "./Display";
import "./Counter.css";

const Counter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(1);

  const addHandler = () => {
    setInputValue((preValue) => {
      return (preValue = preValue + count);
    });
  };

  const subHandler = () => {
    setInputValue((preValue) => {
      const newValue = preValue - count;
      if (newValue < 0) return 0;
      return newValue;
    });
  };

  const changeHandler = (event) => {
    const newCount = Number(event.target.value);
    setCount(newCount);
  };

  return (
    <div className="counter-container">
      <Display inputValue={inputValue} />
      <div className="counter-buttons">
        <button onClick={addHandler}>+</button>
        <input
          type="number"
          className="input"
          onChange={changeHandler}
          value={count}
        />
        <button onClick={subHandler}>-</button>
      </div>
    </div>
  );
};

export default Counter;
