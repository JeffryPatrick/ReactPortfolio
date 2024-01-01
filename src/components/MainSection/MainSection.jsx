import "./MainSection.css"
import data from "../../data/data.json"

import About from "../About/About";
import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { useEffect, useRef } from "react";

const MainSection = () => {

    // const aboutRef = useRef();
    // const skillsRef = useRef();
    // const projectRef = useRef();
    // const contactRef = useRef();

    // const refArray = [aboutRef, skillsRef, projectRef, contactRef];

    // useEffect(() => {
    //     console.log(aboutRef, skillsRef, projectRef, contactRef);

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             console.log("entry", entry.target.id);
    //             if (entry.isIntersecting) {
    //                 entry.target.className = "show";
    //             } else {
    //                 entry.target.className = "hidden";
    //             }
    //         })
    //     })

    //     refArray.forEach((el) => {
    //         observer.observe(el.current)
    //     })

    // }, [])

    return (
        <div className="main-section">
            <Profile data={data.Profile} />
            <About data={data.about} />
            <Skills data={data.skill} />
            <Projects data={data.projects} />
            <Contact data={data.contact} />
        </div>
    );
}

export default MainSection;