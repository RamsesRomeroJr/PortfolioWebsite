import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, githubUrl, liveUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} className="proj-img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                        {liveUrl && (
                            <span className="proj-txtx-link"><a href={liveUrl} className="proj-txtx-link" target="_blank" >Live</a></span>
                        )}
                        <span className="proj-txtx-link"><a href={githubUrl} className="proj-txtx-link" target="_blank">Github</a></span>
                    </div>
                </div>
            </div>
        </Col>
    )
}
