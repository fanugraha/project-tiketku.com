import Button from "../Button/Button";
import "./cardJournalstyle.css";

const CardJournal = (props) => {
  const { details } = props;
  return (
    <div className="container wrapperJourneyCard">
      {details.map((value, index) => (
        <button className="JourneyCard" key={index}>
          <img src={value.img} alt="" />
          <div className="CardBody">
            <h3 className="TagText">{value.tag}</h3>
            <h1 className="Title">{value.title}</h1>
            <p className="Descripsi">{value.deskripsi}</p>
            <Button variant="primary">Readmore</Button>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CardJournal;
