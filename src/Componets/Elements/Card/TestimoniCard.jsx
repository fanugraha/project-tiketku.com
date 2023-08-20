import "./CardTestimonistyle.css";

const TestoimoniCard = (props) => {
  const { details } = props;

  return (
    <div className="container WrapperCardTestimoni">
      {details.map((value, index) => (
        <button className="Card" key={index}>
          <div className="Profile">
            <img src={value.img} alt="" />
            <p className="UserName">{value.name}</p>
          </div>
          <p className="Deskripsi">{value.deskripsi}</p>
        </button>
      ))}
    </div>
  );
};

export default TestoimoniCard;
