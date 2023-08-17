import Card from "../../Elements/Card/Card";
import Label from "../../Elements/Label/Label";
import CardData from "../../Elements/Card/DataCardDestinasi";
import Button from "../../Elements/Button/Button";

const PopularDestinasi = () => {
  return (
    <div className="container mt-20">
      <Label
        headlineText="Popular Destinations"
        subHeadingText="Vacations to make your experience enjoyable in Indonesia!"
      />
      <Card details={CardData} />
      <Button variant="container btn-seeall mt-10">
        <p>Lihat semua</p>
        <img src="src\assets\Icon & Logo\Arow right.png" alt="" />
      </Button>
    </div>
  );
};

export default PopularDestinasi;
