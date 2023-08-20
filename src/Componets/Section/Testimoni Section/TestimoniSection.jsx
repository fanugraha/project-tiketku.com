import TestoimoniCard from "../../Elements/Card/TestimoniCard";
import TestimoniCardData from "../../Elements/Card/TestimoniCardData";
import LabelMidle from "../../Elements/Label/LabelMidle";

const TestimoniSection = () => {
  return (
    <div className="container mt-32">
      <LabelMidle tagtext="Testimonial" title="What They Say About Us" />
      <TestoimoniCard details={TestimoniCardData} />
    </div>
  );
};

export default TestimoniSection;
