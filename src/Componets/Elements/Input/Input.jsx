import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type, placeholder, className } = props;
  return (
    <input type={type} placeholder={placeholder} className={className}></input>
  );
};

export default Input;
