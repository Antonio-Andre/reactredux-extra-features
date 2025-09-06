import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/courses">Courses</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
      {" | "}
      <NavLink to="/authors">Authors</NavLink>
            {" | "}
      <NavLink to="/pokedex">Pokedex</NavLink>
    </nav>
  );
};

export default Header;
  