import React from 'react';
import { NavLink } from 'react-router-dom';
import "./glossary.css";
import Navigation from '../Navigation'

const Glossary = () => {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <div className="glossary-list">
                <ul></ul>
            </div>
        </>    
    )
}

export default Glossary;