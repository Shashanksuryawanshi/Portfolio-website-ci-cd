import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with data and technology, and I’ve been exploring the possibilities ever since!🤷‍♂️
              <br />
              <br />Fluent in tools and languages like 
              <i>
                <b className="purple"> SQL, Python, and the modern data stack.
                </b>
              </i>
              <br />
              <br />
              My field of interest lies in &nbsp;
              <i>
                <b className="purple">designing scalable data pipelines, data modeling </b>
                and extracting meaningful insights through {" "}
                <b className="purple">
                data analysis and visualization.

                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my skills to build and optimize ETL workflows, and work with platforms like <b className="purple">AWS, Apache Spark, </b> and
              <i>
                <b className="purple">
                  {" "}
                  Power BI/Tableau
                </b>
              </i>
              &nbsp; to turn raw data into actionable insights.
              <i>
                <b className="purple">

</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shashanksuryawanshi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shashank-suryawanshi-779b8321a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sha_sha_nk__singh0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
