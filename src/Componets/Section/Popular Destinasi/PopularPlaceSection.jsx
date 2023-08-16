import Card from "../../Elements/Card/Card";
import Label from "../../Elements/Label/Label";
import CardData from "../../Elements/Card/DataCardDestinasi";
const PopularDestinasi = () => {
  return (
    <div className="container mt-20">
      <Label
        headlineText="Popular Destinations"
        subHeadingText="Vacations to make your experience enjoyable in Indonesia!"
      />
      <Card details={CardData} />
    </div>
  );
};

export default PopularDestinasi;
