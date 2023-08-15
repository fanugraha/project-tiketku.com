import React from "react";
import "./ButtonStyle.css";

const Button = (props) => {
  const { children, variant } = props;
  return <button className={variant}>{children}</button>;
};

export default Button;
