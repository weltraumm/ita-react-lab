import { Navbar } from "./navbar";
import "./header.scss";

export const Header: React.FC = () => (
  <header>
    <span className="title">Game Shop</span>
    <Navbar />
  </header>
);
