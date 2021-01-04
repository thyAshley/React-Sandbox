import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Budget Snob</h1>
      <NavLink to="/" exact activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/add" activeClassName="is-active">
        Add
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit
      </NavLink>
    </header>
  );
};

export default Header;
