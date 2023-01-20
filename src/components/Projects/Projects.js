import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import java1 from "../../Assets/Projects/nodeJs-1.png";
import drupal1 from "../../Assets/Projects/nodeJs-2.png";
import node1 from "../../Assets/Projects/nodeJs-3.png";
import node2 from "../../Assets/Projects/drupal-1.png";
import node3 from "../../Assets/Projects/java-1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java1}
              isBlog={false}
              title="Blooger"
              description="In this project I developed a Blog whose Backend and Frontend parts are developed and tested separately. The backend will work as a JSON API."
              ghLink="https://www.youtube.com/channel/UCxoar6KFc6u3beif_e4y3lw"
              demoLink="https://github.com/TAFFAHACHRAF/taffah-projet-web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drupal1}
              isBlog={false}
              title="GUIDE DERB OMAR"
              description="The objective of this project is the realization of a full stack web application in the form of a reservation system for commercial consultations, and a directory of product source links, simple and easy to use."
              ghLink="https://www.youtube.com/channel/UCxoar6KFc6u3beif_e4y3lw"
              demoLink="https://github.com/TAFFAHACHRAF/Guide-Derb-Omar-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node1}
              isBlog={false}
              title="My portfolio"
              description="In this portfolio i have presented my technical skills, and my professional and academic projects that I have carried out during my career.."
              ghLink="https://taffah-achraf.netlify.app"
              demoLink="https://taffah-achraf.netlify.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node2}
              isBlog={false}
              title="ENSET NEWS"
              description="The objective of this project is the realization of a Web Application using DRUPAL CMS to manage the news of ENSET MOHAMMEDIA."
              ghLink="https://www.youtube.com/watch?v=DuMX5UOq6VY&t=45s"
              demoLink="https://taffah.123.ma"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node3}
              isBlog={false}
              title="Tasks management project"
              description="The goal of this project is the development of a JAVA application to manage the projects. This application will allow you to manage project tasks, resources, and displays the schedule in a Gantt chart."
              ghLink="https://www.youtube.com/channel/UCxoar6KFc6u3beif_e4y3lw"
              demoLink="https://github.com/TAFFAHACHRAF/Tasks-management-project"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
