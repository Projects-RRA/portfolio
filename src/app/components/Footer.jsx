import { Container, Row, Col } from "react-bootstrap";
import navLinks from "../../../public/data/navLinks.json";
import FortunePage from "./Fortune";

export const Footer = () => {
  const { linkdin, gmail } = navLinks;
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="RR_FooterLogoOverride">
            <img src="/img/logo.svg" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkdin} target="_blank">
                <img src="/img/nav-icon1.svg" alt="Icon" />
              </a>
              <a href={`mailto:${gmail}`}>
                <img src="/img/nav-icon4.svg" alt="" />
              </a>
              {/*<a href="#"><img src='/img/nav-icon3.svg' alt="Icon" /></a> */}
            </div>
            <FortunePage />
            <p>{`Copyright ${currentYear}. All Rights Reserved`}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
