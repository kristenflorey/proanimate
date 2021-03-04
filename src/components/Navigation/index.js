import React from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.css";
import SiteMap from '../SiteMap'

const Navigation = () => {
    return (
        <nav>
            <div>
                <NavLink to="/" className="home-button">
                    <img className="home-logo" alt="home-logo"/>
                </NavLink>
                <SiteMap />
            </div>
        </nav>
    )
}

export default Navigation;