import react from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <p>Phone~Zone</p>
      </div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/about">About us</NavLink>
        <NavLink to="/food">Food</NavLink>
      </div>
    </div>
  );
};
export default Header;
