import React from "../../Elements/Label/Label";
import Label from "../../Elements/Label/Label";
import Carousel from "../../Fragments/Carousel/Carousel";

const PromoSection = () => {
  return (
    <div className="mt-20">
      <Label headlineText="Promo terbaik buat liburan irit!" />
      <Carousel />
    </div>
  );
};

export default PromoSection;
