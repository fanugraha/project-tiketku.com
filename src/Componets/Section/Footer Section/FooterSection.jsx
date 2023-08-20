import Links from "./Links";
import Services from "./Services";
import Contacts from "./Contacts";
import "./Footerstyle.css";

const FooterSection = () => {
  return (
    <div className="container-fluid WrapperFooter">
      <div className="ProfileFooter">
        <img src="src\assets\Icon & Logo\Logo.svg" alt="" />
        <p className="deskripsi">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis.
        </p>
      </div>
      <Links />
      <Services />
      <Contacts />
    </div>
  );
};

export default FooterSection;
