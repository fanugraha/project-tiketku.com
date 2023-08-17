import "./VillaCardstye.css";

const VillaCard = (props) => {
  const { details } = props;
  return (
    <div className="container wrapperCard">
      {details.map((value, index) => (
        <button className="card" key={index}>
          <img src={value.img} alt="" />
          <div className="cardBody">
            <h1 className="CardHeadlineVilla">{value.title}</h1>
            <div className="place">
              <img src={value.icon} alt="" />
              <p className="placeText">{value.location}</p>
            </div>
            <div className="ratingwrapper">
              <img src={value.iconrating} alt="" />
              <p className="rating">{value.rating}</p>
            </div>
            <p className="cardPriceVilla">{value.price}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default VillaCard;
