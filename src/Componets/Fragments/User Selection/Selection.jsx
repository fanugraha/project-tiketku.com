import Button from "../../Elements/Button/Button";
import "./Selectionstyle.css";

const Selection = () => {
  return (
    <div className="WrapperSelection">
      <Button variant="dropdown-btn">
        <img src="src\assets\Icon & Logo\planeBlackIcon.svg" alt="" />
        <p>Pesawat</p>
        <img src="src\assets\Icon & Logo\arrowDown.svg" alt="" />
      </Button>
      <Button variant="dropdown-btn">
        <img src="src\assets\Icon & Logo\PersonFillIcon.svg" alt="" />
        <p>Penumpang</p>
        <img src="src\assets\Icon & Logo\arrowDown.svg" alt="" />
      </Button>
      <Button variant="dropdown-btn">
        <img src="src\assets\Icon & Logo\seatIcon.svg" alt="" />
        <p>Ekonomi</p>
        <img src="src\assets\Icon & Logo\arrowDown.svg" alt="" />
      </Button>
    </div>
  );
};

export default Selection;
