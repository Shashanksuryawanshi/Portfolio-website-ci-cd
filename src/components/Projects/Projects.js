import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduTechImg from "../../Assets/Projects/eduTechImg.png";
import diwalisale from "../../Assets/Projects/diwalisale.png";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import Heart from "../../Assets/Projects/Heart.png";
import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import Tableau from "../../Assets/Projects/Tableau.png";

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
              imgPath={Heart}
              isBlog={false}
              title="Heart Disease Predictor "
              description="Heart disease prediction using logistic regression with Flask UI, validating age, chest pain type, and heart rate inputs.  
Robust error handling ensures smooth user experience, catching dataset, training, and input errors."
              ghLink="https://github.com/Shashanksuryawanshi/Heart-Disease-predictor.git"
              demoLink="https://www.abc.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diwalisale}
              isBlog={false}
              title="Diwali Sales Analysis"
              description="Conducted EDA on Diwali sales data to analyze consumer behavior across demographics, identifying high-demand products and peak sales periods. Visualized trends using Matplotlib and Seaborn, documenting findings in Jupyter Notebook."
              ghLink=""
              demoLink="https://"      
              // <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tableau}
              isBlog={false}
              title="Data Visualization"
              description="Developed an interactive Tableau dashboard analyzing UEFA trends with dynamic visuals and intuitive navigation.  
Built a robust ETL pipeline to extract, clean, and transform data, presenting insights on country, club, and player performance."
              ghLink=""
              demoLink="https://abc.netlify.app/"
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
