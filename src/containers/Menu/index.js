import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import RegisterUser from "../RegisterUser";

const Menu = ({ authenticated }) => {
  return (
    <nav className="menu">
      <NavLink to="/">Strona główna</NavLink>
      {" | "}
      <NavLink to="/about">O projekcie</NavLink>
      {" | "}
      {!authenticated && <RegisterUser />}
    </nav>
  );
};

Menu.propTypes = {
  authenticated: propTypes.bool.isRequired,
};

export default Menu;
