import React from "../../Elements/Label/Label";
import Label from "../../Elements/Label/Label";
import Carousel from "../../Fragments/Carousel/Carousel";
import Button from "../../Elements/Button/Button";

const PromoSection = () => {
  return (
    <div className="container mt-20">
      <Label headlineText="Promo terbaik buat liburan irit!" />
      <Carousel />
      <Button variant="container btn-seeall mt-10">
        <p>Lihat semua</p>
        <img src="src\assets\Icon & Logo\Arow right.png" alt="" />
      </Button>
    </div>
  );
};

export default PromoSection;
