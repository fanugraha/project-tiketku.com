import React from "react";
import "./LabelMidle.css";

const LabelMidle = (props) => {
  const { tagtext, title } = props;
  return (
    <div className="wrapperLabel">
      <h4 className="tagtext">{tagtext}</h4>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default LabelMidle;
