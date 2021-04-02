import React from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.css";
import SiteMap from '../SiteMap'

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
            {/* <NavLink to="/" className="home-button">
                <img className="home-logo" alt="home-logo"/>
            </NavLink> */}
                <li><NavLink to="/projects" className="projects-link">
                    Projects
                </NavLink>
                </li>
                <li><NavLink to="/wireframes" className="wireframes-link">
                    Wireframes
                </NavLink>
                </li>
                <li><NavLink to="/paintings" className="paintings-link">
                    Paintings
                </NavLink>
                </li>
                <li><NavLink to="/contact" className="contact-link">
                    Contact
                </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;