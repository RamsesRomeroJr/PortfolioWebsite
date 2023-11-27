import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, githubUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} className="proj-img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <span className="proj-txtx-link"><a href={githubUrl} className="proj-txtx-link">Github</a></span>
                </div>
            </div>
        </Col>
    )
}
