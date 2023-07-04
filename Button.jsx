import React from "react";
import "./App.css";
const Button = ({ name, myclass }) => {
  return (
    <button class={myclass} role="button">
      <span className="ourspan">{name}</span>
    </button>
  );
};

export default Button;
