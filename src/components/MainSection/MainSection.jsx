import "./MainSection.css"
import data from "../../data/data.json"

import About from "../About/About";
import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

import { faGear, faUser, faCircleInfo, faLaptopCode, faAt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

const MainSection = ({ setActiveSection }) => {
    const mainRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            const sections = document.querySelectorAll("main section");

            const navHeight = window.outerHeight / 1.3;

            sections.forEach((section) => {
                const sectionRect = section.getBoundingClientRect();
                if (sectionRect.top <= navHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        mainRef.current.addEventListener('scroll', handleScroll);

        return () => {
            mainRef.current.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <main ref={mainRef} className="main-section" >
            <Profile id={"profile"} icon={faUser} data={data.Profile} />
            <About id={"about"} icon={faCircleInfo} data={data.about} />
            <Skills id={"skills"} icon={faGear} data={data.skill} />
            <Projects id={"projects"} icon={faLaptopCode} data={data.projects} />
            <Contact id={"contact"} icon={faAt} data={data.contact} />
        </main>

    );
};

export default MainSection;