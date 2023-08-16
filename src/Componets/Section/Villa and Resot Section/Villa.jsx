import Button from "../../Elements/Button/Button";
import Label from "../../Elements/Label/Label";
import DataTag from "./DataTag";

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
    </div>
  );
};

export default Villa;
