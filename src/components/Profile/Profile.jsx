import "./Profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ id, icon, data }) => {
    return (
        <section id={id} className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">
                <FontAwesomeIcon icon={icon} className="heading-icon" />
                {data.title}
            </h1>
            <div className="profile-content">
                <div className="imgSection">
                    <img src={require("../../assets/me2.png")} alt="me" className="img" />
                </div>
                <div className="details">
                    <p className="subheading-2">{data.greetings}</p>
                    <h1 className="heading">{data.name}</h1>
                    <p className="subheading-1">
                        {data.role}&nbsp;<FontAwesomeIcon icon={faCode} className="subheading-1-icon" />
                    </p>
                    <div className="online-links">
                        <a href={data.github} target="_blank"><i className="fa fa-github"></i></a>
                        <a href={data.linked_in} target="_blank"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;