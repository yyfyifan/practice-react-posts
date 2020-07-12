import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="blue accent-2">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Blog</a>
                        <ul id="nav-mobile" className={[style.menu, "right"].join(" ")} style={{ display: 'flex' }} >
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/about">About</NavLink>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;