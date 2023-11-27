import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container >
                <Row className="align-items-center" >
                    <Col sm={6} >

                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ramses-romero-jr/" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/RamsesRomeroJr" target="_blank"><img src={navIcon2} /></a>
                        </div>
                        <p>CopyRight 20223. All Right Reserved by Ramses</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
