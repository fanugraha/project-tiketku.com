import React from "react";
import "./Labelstyle.css";

const Label = (props) => {
  const { headlineText, subHeadingText } = props;

  return (
    <div className="container">
      <h1 className="heading">{headlineText}</h1>
      <p className="subHeading">{subHeadingText}</p>
    </div>
  );
};

export default Label;
