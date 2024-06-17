import "./Contact.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ id, icon, data }) => {

    return (
        <section id={id} className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">
                <FontAwesomeIcon icon={icon} className="heading-icon" />
                {data.title}
            </h1>
            <div className="contact-content">
                <a className="contact-link info" href={"tel:" + data.phone_no} rel="noreferrer">
                    <i className="fa fa-phone" id="link-icon"></i>
                    {data.phone_no}
                </a>
                <a className="contact-link info" href={"mailto:" + data.email} rel="noreferrer">
                    <i class="fa fa-envelope" id="link-icon"></i>
                    {data.email}
                </a>
                <a className="contact-link info" href={data.linked_in} target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin" id="link-icon"></i>
                    Jeffry Patrick
                </a>
            </div>
        </section>

    );
}

export default Contact;