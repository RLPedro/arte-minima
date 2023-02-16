import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link className="header__link" to="/bio">bio</Link>
      <Link className="header__link" to="/media">media</Link>
      <Link className="header__link" to="/contact">contact</Link>
    </header>
  )
};

export default Header;
