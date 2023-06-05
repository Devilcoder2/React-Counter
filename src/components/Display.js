import React from "react";
import "./Display.css";

const Display = (props) => {
  return (
    <div className="display-container">
      <h1 className="display">{props.inputValue}</h1>
    </div>
  );
};

export default Display;
