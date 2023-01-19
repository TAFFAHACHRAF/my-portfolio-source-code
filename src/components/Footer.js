import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Achraf TAFFAH</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} ACHRAF TAFFAH</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
                <a
                  href="https://github.com/TAFFAHACHRAF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCxoar6KFc6u3beif_e4y3lw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"white"}}
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/achraf-taffah-b679a01aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"white"}}
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/achraf_taffah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{backgroundColor:"dark"}}
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
