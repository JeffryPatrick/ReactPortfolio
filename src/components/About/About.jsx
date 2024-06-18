import "./About.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = ({ id, icon, data }) => {
    return (
        <section id={id} className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">
                <FontAwesomeIcon icon={icon} className="heading-icon" />
                {data.title}
            </h1>
            <div className="about-content">
                <div className="edu-content">
                    <p className="subheading-1">
                        <FontAwesomeIcon icon={faGraduationCap} className="subheading-1-icon" />&nbsp;{data.education}
                    </p>
                    <p className="info">{data.degree} <span className="abbrevation">{data.abb}</span></p>
                </div>
                <div className="details">
                    <p className="info">{data.info[0]}</p>
                    <p className="info">{data.info[1]}</p>
                    <p className="info">{data.info[2]}</p>
                    <p className="info">{data.info[3]}</p>
                    <p className="info">{data.info[4]}</p>
                </div>
            </div>
        </section>
    );
}

export default About;