"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import bannerData from "../../../../public/data/bannerData.json";
import FortunePage from "@app/components/Fortune";

export const Banner = () => {
  const { textName, textWelcome, textAbout, textAboutSecondLine, roleForAnimation } = bannerData;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [role, setRole] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // Time freez for the text after animation
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [role]);

  const tick = () => {
    let i = loopNum % roleForAnimation.length;
    let fullText = roleForAnimation[i];
    let updatedRoleText = isDeleting
      ? fullText.substring(0, role.length - 1)
      : fullText.substring(0, role.length + 1);

    setRole(updatedRoleText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedRoleText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedRoleText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isvisible }) => (
                <div
                  className={
                    isvisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">{textWelcome}</span>
                  <h1>{textName} </h1>
                  <h2>
                    <span className="txt-rotate">
                      <span className="wrap">{role}</span>
                    </span>
                  </h2>
                  <p>{textAbout}</p>
                  <p>{textAboutSecondLine}</p>
                  {/* <button onClick={() => console.log("connect")}>
                    {textLetsConnect} <ArrowRightCircle size={25} />
                  </button> */}
                   <FortunePage />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isvisible }) => (
                <div
                  className={
                    isvisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src="/img/bannerSideImage.png" alt="Header Img" loading="lazy"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
