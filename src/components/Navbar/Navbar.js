import React from 'react';
import './Navbar.scss'; 
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to={'/'}>
                    <h1>WOOKIEDb</h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
