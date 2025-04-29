import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashank Surywanshi </span>
            from <span className="purple"> Gwalior, M.P.</span>
            <br />
            Currently pursuing my B.Tech in Computer Science from Lovely Professional University (2022-2026)
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Anchoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Socializing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Anup</footer> */}
        </blockquote>
        {/* <a href="https://medium.com/@anup-dubey09" target="_blank" rel="noopener noreferrer">
          Visit my Medium Blogs
        </a> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
