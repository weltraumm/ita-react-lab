import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navArr: Array<string> = ["Home", "Products", "About"];

  return (
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
};
