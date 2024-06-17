import { useRef, useState } from "react";
import "./Navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser, faCircleInfo, faLaptopCode, faAt } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ activeSection }) => {

    const navRef = useRef(null);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav ref={navRef} className="navbar">
            <a className="logo" href="/ReactPortfolio">Jeffry Patrick</a>
            <ul className={isNavExpanded ? "menu-list expanded" : "menu-list"}>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <a className={activeSection === 'profile' ? "menu-link active" : "menu-link"} href="#profile">
                        <FontAwesomeIcon icon={faUser} className="nav-icon" />&nbsp;Profile</a>
                </li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <a className={activeSection === 'about' ? "menu-link active" : "menu-link"} href="#about">
                        <FontAwesomeIcon icon={faCircleInfo} className="nav-icon" />&nbsp;About</a>
                </li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <a className={activeSection === 'skills' ? "menu-link active" : "menu-link"} href="#skills" >
                        <FontAwesomeIcon icon={faGear} className="nav-icon" />&nbsp;Skills</a>
                </li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <a className={activeSection === 'projects' ? "menu-link active" : "menu-link"} href="#projects">
                        <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />&nbsp;Projects</a>
                </li>
                <li onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <a className={activeSection === 'contact' ? "menu-link active" : "menu-link"} href="#contact">
                        <FontAwesomeIcon icon={faAt} className="nav-icon" />&nbsp;Contact</a>
                </li>
            </ul>
            <i className={isNavExpanded ? "fa fa-bars menu-icon rotate" : "fa fa-bars menu-icon"} onClick={() => setIsNavExpanded(!isNavExpanded)}></i>
        </nav>
    );
}

export default Navbar;