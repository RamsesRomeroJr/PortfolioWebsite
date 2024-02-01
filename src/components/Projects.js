import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/ThreadsClone.gif";
import projImg2 from "../assets/img/HypeGeek-WireFrame-Splash.jpg";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Threads Clone",
            description: "Threads Clone... with more features",
            imgUrl: projImg1,
            githubUrl: "https://github.com/dakotabenger/flavorgram-menoitios",
            liveUrl: "https://clone-of-threads.vercel.app/"
        },
        {
            title: "HypeGeek",
            description: "HypeGeek is THE site for sneaker heads to get all the info they need! ",
            imgUrl: "https://raw.githubusercontent.com/RamsesRomeroJr/HypeGeek/main/Snippets/HypeGeek-signup-login.gif",
            githubUrl: "https://github.com/RamsesRomeroJr/HypeGeek",
            liveUrl: ""
        },
        {
            title: "SkinTnT",
            description: "SkinTnT is a clone of AirBnB but instead of finding spots to stay at",
            imgUrl: "https://ramsesromerojr.github.io/images/skintnt.gif",
            githubUrl: "https://github.com/RamsesRomeroJr/SkinTnT",
            liveUrl: ""
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                     <h2>Projects</h2>
                     <p>Personal/Group</p>
                     </div>
                     }
                     </TrackVisibility>
                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                     </Nav>
                     Commented out section Till I have more projects to flesh out tab sections
                     */}
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                     </Tab.Content>
                     </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}
