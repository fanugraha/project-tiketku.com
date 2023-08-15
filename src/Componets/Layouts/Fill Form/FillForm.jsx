import React from "react";
import "./FillFormstyle.css";
import FillterFeature from "../../Fragments/Fillter Feature/FillterFeature";
import Selection from "../../Fragments/User Selection/Selection";
import UserFillForm from "../../Fragments/User Fill Form/UserFillForm";

const FillForm = () => {
  return (
    <div className="WrapperFillForm">
      <FillterFeature />
      <Selection />
      <UserFillForm />
    </div>
  );
};

export default FillForm;
