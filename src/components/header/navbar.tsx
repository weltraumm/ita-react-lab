import { NavLink } from "react-router-dom";

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
  <nav>
    <ul>
      {navItems.map((navItem) => {
        return (
          <li>
            <NavLink to={navItem.url}>{navItem.name}</NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);
