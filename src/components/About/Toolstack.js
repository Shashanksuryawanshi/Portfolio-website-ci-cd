import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiApachespark } from "react-icons/si";
import { FaDatabase, FaLaptopCode } from "react-icons/fa"; // For Hadoop, VS Code, Jupyter Notebook
import { SiVisualstudiocode } from "react-icons/si"; // For VS Code

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Big Data Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Hadoop">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Apache Spark">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebook">
        <FaLaptopCode />
      </Col>
    </Row>
  );
}

export default Toolstack;
