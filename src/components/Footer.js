import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/DoIT .png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          {/* Logo */}
          <Col xs={12} className="footer-logo">
            <img src={logo} alt="Logo" />
          </Col>

          {/* Contact Info */}
          <Col xs={12} className="footer-contact">
            <p>
              Mobile: <a href="tel:+919691497996">+91 9691497996</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:codeadept@doitcoding.club">
                codeadept@doitcoding.club
              </a>
            </p>
          </Col>

          {/* Social Icons */}
          <Col xs={12} className="footer-social">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/showcase/codeadept"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://x.com/codeadept_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com/codeadept/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p className="copyright">© 2025 CodeAdept. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
