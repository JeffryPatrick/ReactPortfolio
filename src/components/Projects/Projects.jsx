import "./Projects.css";
import crud from "../../assets/crud.png";
import joke from "../../assets/jokeimg.jpeg";
import todo from "../../assets/todo.png";
import weather from "../../assets/weather.png";
import tictactoe from "../../assets/tictactoe.png";
import portfolio from "../../assets/portfolio.jpg";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Projects = ({ data }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const img_list = [crud, joke, todo, weather, tictactoe, portfolio]

    return (
        <section id="projects" className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">{data.title}</h1>
            <div className="project-content">
                {
                    data.proj_list.map((proj, i) => (
                        <div data-aos="flip-right" data-aos-delay="500" className="details">
                            <p className="subheading-1">{proj.proj_name}</p>
                            <img src={img_list[i]} alt="" className="proj-img" />
                            <p className="info">{proj.proj_desc}</p>
                            <a href={proj.github_link} target="_blank" className="repo-link"><i className="fa fa-github"></i>&nbsp;Github</a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;