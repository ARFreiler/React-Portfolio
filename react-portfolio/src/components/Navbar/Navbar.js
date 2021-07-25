import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#work">My Work</a>
                <a href="#contact">Contact Me</a>
            </div>
        </div>
    );
};

export default Navbar;