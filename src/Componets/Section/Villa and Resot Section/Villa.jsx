import Button from "../../Elements/Button/Button";
import VillaCard from "../../Elements/Card/VillaCard";
import Label from "../../Elements/Label/Label";
import DataTag from "./DataTag";
import DataCardVilla from "../../Elements/Card/DataCardVilla";

const Tag = DataTag.map((btntag, index) => (
  <Button variant="secondary" key={index}>
    {btntag}
  </Button>
));

const Villa = () => {
  return (
    <div className="container mt-20">
      <Label headlineText="Villa and Resort in Indonesia" />
      <div className="container flex gap-4">{Tag}</div>
      <VillaCard details={DataCardVilla} />
      <Button variant="container btn-seeall mt-10">
        <p>Lihat semua</p>
        <img src="src\assets\Icon & Logo\Arow right.png" alt="" />
      </Button>
    </div>
  );
};

export default Villa;
