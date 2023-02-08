import React from 'react'
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="imgLogo" alt="logo" />
            <div className="content">
                <h1>Mathis Pastre Développeur Web</h1>
            </div>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
        </header>
    )
}
