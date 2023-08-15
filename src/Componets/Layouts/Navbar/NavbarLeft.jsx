import Logo from "../../Elements/Logo/Logo";
import "./NavbarLeft.css";

// Data
const listItem = ["Home", "To Do", "Event"];

// Loop List
const list = listItem.map((li, index) => (
  <li key={index}>
    <a href="#">{li}</a>
  </li>
));

const NavbarLeft = () => {
  return (
    <div className="navbarLeft">
      <Logo />
      <ul>{list}</ul>
    </div>
  );
};

export default NavbarLeft;
