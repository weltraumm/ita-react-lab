import { NavLink } from "react-router-dom";
import { SubMenu } from "./subMenu";

interface INavItem {
  name: string;
  url: string;
}

const navItems: Array<INavItem> = [
  { name: "Home", url: "/home" },
  { name: "Products", url: "/products" },
  { name: "About", url: "/about" },
  { name: "Sign In", url: "/sign-in" },
  { name: "Sign Up", url: "/sign-up" },
];

export const Navbar: React.FC = () => (
  <nav className="nav">
    <ul className="nav__menu">
      {navItems.map((navItem) => {
        return (
          <li key={navItem.name} className="nav__menu-item">
            <NavLink to={navItem.url}>{navItem.name}</NavLink>
            {navItem.name === "Products" && <SubMenu />}
          </li>
        );
      })}
    </ul>
  </nav>
);
