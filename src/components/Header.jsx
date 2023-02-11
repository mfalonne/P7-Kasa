import React from "react"
import {NavLink } from "react-router-dom"
import Logo from "../assets/LOGO_Header.png"
import '../styles/Header.css';

const Header = () => {
    return(
        <header>
            <div className="nav_container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <nav>
                        <ul>
                            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "nav-noActive")}>
                                <li>Accueil</li>
                            </NavLink>
                            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "nav-noActive")}>
                                <li>A Propos</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
        
}

export default Header