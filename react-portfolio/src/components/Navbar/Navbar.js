import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div class="topnav">
                <a class="active" href="#resume">My CV</a>
                <a href="#contact">Contact Me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#aboutme">About Me</a>
            </div>
        </div>
    );
};

export default Navbar;