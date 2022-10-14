import React, {useState } from 'react';
import { Link } from "react-router-dom"

import "./Navbar.css";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className='Navbar'>
            <div className= {`nav-list ${isOpen && "open"}`}>
                <Link className="nav-items" to="/">Home</Link>
                <Link className="nav-items" to="/project">Projects</Link>
                <Link className="nav-items" to="/contact">Contact</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='bar'></div>
            </div>
        </div>
        </>
    )
}

export default Navbar
