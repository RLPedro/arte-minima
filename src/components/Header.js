import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link className="header__link" to="/bio">who we are</Link>
      <Link className="header__link" to="/">programs</Link>
      <Link className="header__link" to="/">discography</Link>
      <Link className="header__link" to="/media">media</Link>
      <Link className="header__link" to="/contact">contact</Link>
    </header>
  )
};

export default Header;
