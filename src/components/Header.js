import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="imgLogo" alt="logo" />
      <div class="container">
        <div class="box">
          <div class="titleh1">
            <h1>Mathis Pastre</h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>Développeur Web</p>
          </div>
        </div>
      </div>
    </header>
  );
}
