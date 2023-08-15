import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container Navbar">
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
};

export default Navbar;
