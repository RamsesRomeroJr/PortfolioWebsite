import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Javascript from "../assets/img/square-js.svg";
import Python from "../assets/img/python.svg";
import Liquid from "../assets/img/shopify.svg";
import Git from "../assets/img/git-alt.svg";
import ReactJs from "../assets/img/react.svg";
import Vue from "../assets/img/vuejs.svg";
import HTML from "../assets/img/html5.svg";
import CSS from "../assets/img/css3-alt.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Familiar with the following</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Javascript} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={Python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={Liquid} alt="Image" />
                                    <h5>Liquid</h5>
                                </div>
                                <div className="item">
                                    <img src={Git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={ReactJs} alt="Image" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={Vue} alt="Image" />
                                    <h5>Vue.js</h5>
                                </div>
                                <div className="item">
                                    <img src={HTML} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}
