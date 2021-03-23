import React from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.css";
import SiteMap from '../SiteMap'

const Navigation = () => {
    return (
        <nav>
            {/* <NavLink to="/" className="home-button">
                <img className="home-logo" alt="home-logo"/>
            </NavLink> */}
            <NavLink to="/projects" className="projects-link">
                Projects
            </NavLink>
            <NavLink to="/wireframes" className="wireframes-link">
                Wireframes
            </NavLink>
            <NavLink to="/paintings" className="paintings-link">
                Paintings
            </NavLink>
            <NavLink to="/contact" className="contact-link">
                Contact
            </NavLink>
        </nav>
    )
}

export default Navigation;