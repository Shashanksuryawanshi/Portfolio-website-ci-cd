import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiApacheairflow,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSnowflake,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiTableau,
  SiPowerbi,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FaAws, FaChartBar } from "react-icons/fa"; // ChartBar used for Seaborn

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* Data Tools & Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>

      {/* Databases & Warehousing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
      </Col>

      {/* Cloud & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>

      {/* Visualization & BI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar /> {/* Used as visual for Seaborn */}
      </Col>
    </Row>
  );
}

export default Techstack;
