import React from 'react';
import grupo2 from "../imgs/grupo2.jpeg";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home content">
      <div className="home__titles">
        <h1 className="page-title">ARTE MINIMA</h1>
        <h2 className="home__subtitle">renaissance ensemble</h2>
      </div>

      <img id="grupo2" src={grupo2} alt="Arte Mínima" />
      {/* <Link to="./"><img id="logo" src={logo} alt="Logo of the ensemble Arte Mínima" /></Link> */}    </div>
  )
}
