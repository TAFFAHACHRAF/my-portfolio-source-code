import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Achraf TAFFAH </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />I am Achraf TAFFAH, Software engineering student at ENSET Mohammedia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "وقل اعملوا فسيرى الله عملكم ورسوله والمؤمنون"{" "}
          </p>
          <footer className="blockquote-footer">سورة التوبة - الآية 105</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
