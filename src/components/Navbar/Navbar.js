import React from 'react';
import './Navbar.scss'; 
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to={'/'}>
                    <h1>WOOKIEDb</h1>
                </Link>
            </div>
            <Search/>
        </div>
    )
}

export default Navbar
