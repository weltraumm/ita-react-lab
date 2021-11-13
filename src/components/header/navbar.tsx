import { NavLink } from "react-router-dom";

const navArr: Array<string> = ["Home", "Products", "About", "Sign In", "Sign Up"];

export const Navbar: React.FC = () => (
  <nav>
    <ul>
      {navArr.map((navItem) => {
        return (
          <li>
            <NavLink to={`/${navItem.toLowerCase()}`}>{navItem}</NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);
