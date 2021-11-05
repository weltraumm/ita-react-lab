import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="selected">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
