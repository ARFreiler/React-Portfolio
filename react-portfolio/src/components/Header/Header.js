import React from 'react';
import './Header.css';
import '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="header">
                    <h1 className="name">Ashleigh Freiler</h1>
                    <p className="tag">An evolving human seeking knowledge in all things great and small.</p>
                    <Navbar></Navbar>
                </div>

            </div>
        </div>
    )
}

export default Header;