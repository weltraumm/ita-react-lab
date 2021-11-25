import { NavLink } from "react-router-dom";

interface INavItem {
  name: string;
  url: string;
}

const navItems: Array<INavItem> = [
  { name: "PC", url: "/pc" },
  { name: "Playstation 5", url: "/playstation-5" },
  { name: "XBox One", url: "/xbox-one" },
];

export const SubMenu: React.FC = () => (
  <ul className="nav__submenu">
    {navItems.map((navItem) => {
      return (
        <li key={navItem.name} className="nav__submenu-item">
          <NavLink to={navItem.url}>{navItem.name}</NavLink>
        </li>
      );
    })}
  </ul>
);
