import React from "react";
import Button from "../../Elements/Button/Button";
import "./FillterFeaturestyle.css";

const FilterFeature = () => {
  return (
    <div className="WrapperFillter">
      <Button variant="fillter-btn">
        <img src="src\assets\Icon & Logo\planeIcon.svg" alt="" />
        <p>Pesawat</p>
      </Button>
      <Button variant="fillter-btn">
        <img src="src\assets\Icon & Logo\hotelcon.svg" alt="" />
        <p>Pesawat</p>
      </Button>
      <Button variant="fillter-btn">
        <img src="src\assets\Icon & Logo\trainIcon.svg" alt="" />
        <p>Pesawat</p>
      </Button>
    </div>
  );
};

export default FilterFeature;
