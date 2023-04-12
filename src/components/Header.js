import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="imgLogo" alt="logo" />
      <div className="container">
        <div className="box">
          <div className="titleh1">
            <h1>Mathis Pastre</h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Développeur Web</p>
          </div>
        </div>
      </div>
    </header>
  );
}
