import "./Contact.css"

const Contact = ({ data }) => {
    return (
        <section id="contact" className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">{data.title}</h1>
            <div className="contact-content">
                <div className="contact-link">
                    <i class="fa fa-envelope"></i>
                    <a className="info" href={"mailto:" + data.email}>{data.email}</a>
                </div>
                <div className="contact-link">
                    <i className="fa fa-linkedin"></i>
                    <a className="info" href={data.linked_in} target="_blank">Jeffry Patrick</a>
                </div>
            </div>
        </section>

    );
}

export default Contact;