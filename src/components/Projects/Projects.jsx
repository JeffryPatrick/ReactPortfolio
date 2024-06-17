import "./Projects.css";
import crud from "../../assets/crud.png";
import joke from "../../assets/jokeimg.jpeg";
import todo from "../../assets/todo.png";
import weather from "../../assets/weather.png";
import tictactoe from "../../assets/tictactoe.png";
import portfolio from "../../assets/portfolio.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ id, icon, data }) => {

    const img_list = [crud, joke, todo, weather, tictactoe, portfolio]

    return (
        <section id={id} className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">
                <FontAwesomeIcon icon={icon} className="heading-icon" />
                {data.title}
            </h1>

            <div className="project-content">
                {
                    data.proj_list.map((proj, i) => (
                        <div className="flip-card" key={i}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="subheading-1">{proj.proj_name}</p>
                                    <img src={img_list[i]} alt="" className="proj-img" />
                                </div>
                                <div className="flip-card-back">
                                    <p className="info">{proj.proj_desc}</p>
                                    <a href={proj.github_link} target="_blank" rel="noreferrer" className="repo-link"><i className="fa fa-github"></i>&nbsp;Github</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;