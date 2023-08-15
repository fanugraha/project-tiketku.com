import FillForm from "../../Layouts/Fill Form/FillForm";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./HeroSectionstyle.css";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <Navbar />
      <h1 className="HeroCallToAction">
        Jelajahi 38 Destinasi Indonesia dari Sabang Sampai Merauke!
      </h1>
      <FillForm />
    </div>
  );
};

export default HeroSection;
