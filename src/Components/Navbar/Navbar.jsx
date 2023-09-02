import NavA from "./NavA";
import NavB from "./NavB";
import NavC from "./NavC";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar" id="nav-menu">
      <NavA />
      <NavB />
      <NavC />
    </div>
  );
};
export default Navbar;
