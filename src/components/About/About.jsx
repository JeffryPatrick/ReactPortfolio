import "./About.css"

const About = ({ data }) => {
    return (
        <section id="about" className="section">
            <p className="subheading-2">{data.catchy_line}</p>
            <h1 className="heading">{data.title}</h1>
            <div className="about-content">
                <div className="edu-content">
                    <p className="subheading-1">{data.education}</p>
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