import { NavLink } from "react-router-dom";

const navArr: Array<string> = ["Home", "Products", "About"];

export const Navbar: React.FC = () => (
  <nav>
    <ul>
      {navArr.map((navItem) => {
        return (
          <li>
            <NavLink to={`/${navItem.toLowerCase()}`} activeClassName="selected">
              {navItem}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);
