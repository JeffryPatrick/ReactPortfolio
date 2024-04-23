import "./Skills.css";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


const Skills = ({ data }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="skills" className="section">
            <p className="subheading-2" data-aos="fade-right" data-aos-delay="250">{data.catchy_line}</p>
            <h1 className="heading" data-aos="fade-right" data-aos-delay="500">{data.title}</h1>
            <div className="skill-content" data-aos="fade-right" data-aos-delay="750">
                <div className="details">
                    <p className="subheading-1">{data.front_end.name}</p>
                    <div className="inner">
                        <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                        <p className="info">{data.front_end.skill_stack[0]}</p>
                    </div>
                    <div className="inner">
                        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                        <p className="info">{data.front_end.skill_stack[1]}</p>
                    </div>
                    <div className="inner">
                        <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
                        <p className="info">{data.front_end.skill_stack[2]}</p>
                    </div>
                    <div className="inner">
                        <FontAwesomeIcon icon={faSquareJs} className="skill-icon" />
                        <p className="info">{data.front_end.skill_stack[3]}</p>
                    </div>
                    <div className="inner">
                        <FontAwesomeIcon icon={faReact} className="skill-icon" />
                        <p className="info">{data.front_end.skill_stack[4]}</p>
                    </div>
                </div>
                <div className="details">
                    <p className="subheading-1">{data.back_end.name}</p>
                    <div className="inner">
                        <FontAwesomeIcon icon={faJava} className="skill-icon" />
                        <p className="info">{data.back_end.skill_stack[0]}</p>
                    </div>
                    <div className="inner">
                        <FontAwesomeIcon icon={faServer} className="skill-icon" />
                        <p className="info">{data.back_end.skill_stack[1]}</p>
                    </div>
                </div>
                <div className="details">
                    <p className="subheading-1">{data.database.name}</p>
                    <div className="inner">
                        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                        <p className="info">{data.database.skill_stack}</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Skills;