import React from "react";
import "./Cardstyle.css";

const Card = (props) => {
  const { details } = props;

  return (
    <div className="container WrapperCard">
      {details.map((value, index) => (
        <button className="card" key={index}>
          <img src={value.img} alt="" />
          <div className="cardBody">
            <div className="place">
              <img src={value.icon} alt="" />
              <p className="placeText">{value.place}</p>
            </div>
            <p className="cardHeadline">{value.title}</p>
            <p className="cardPrice">{value.price}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Card;
