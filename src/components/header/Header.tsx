import React from "react";
import { Navbar } from "./Navbar";
import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <span className="title">Game Shop</span>
      <Navbar />
    </header>
  );
};
