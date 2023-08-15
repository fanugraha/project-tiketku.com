import Button from "../../Elements/Button/Button";
import "./NavbarRight.css";

// Data
const navList = ["Download App", "My Ticket"];

// Loop
const list = navList.map((li, index) => (
  <li key={index}>
    <a href="#">{li}</a>
  </li>
));

const NavbarRight = () => {
  return (
    <div className="navbarRight">
      <ul>{list}</ul>
      <Button variant="primary">
        <p>Login / Register</p>
      </Button>
    </div>
  );
};

export default NavbarRight;
