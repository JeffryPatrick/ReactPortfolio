import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navbar">
            <a className="logo" href="/">Jeffry Patrick</a>
            <ul className={isNavExpanded ? "menu-list expanded" : "menu-list"}>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#profile">Profile</a></li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#about">About Me</a></li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#skills">Skills</a></li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#projects">Projects</a></li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}><a className="menu-link" href="#contact">Contact Me</a></li>
            </ul>
            <i className={isNavExpanded ? "fa fa-bars menu-icon rotate" : "fa fa-bars menu-icon"} onClick={() => setIsNavExpanded(!isNavExpanded)}></i>
        </nav>
    );
}

export default Navbar;