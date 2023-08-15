import React from "react";
import "./Carouselstyle.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="container carousel slide mycsscarousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="src\assets\Media\promo 1.png"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="src\assets\Media\promo 2.png"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="src\assets\Media\promo 3.png"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
