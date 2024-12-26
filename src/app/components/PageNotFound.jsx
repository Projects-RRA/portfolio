"use client";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";

export const PageNotFound = () => {
  const [countdown, setCountdown] = useState(5); // STate for countdown

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000); // Update countdown every second

    // Clear the timer when component unmounts or countdown reaches 0
    return () => clearTimeout(timer);
  }, [countdown]);

  // Redirect to previous page when the state value is 0
  useEffect(() => {
  if ((countdown === 0)) {
    window.history.back();
  }
  }, [countdown]);

  return (
    <section className="banner RR_404Banner" id="404">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <span className="tagline RR_PageNotFound404">OOPS! 404</span>
              <h1>lost in space</h1>
              <h1>Don't worry we will redirect you to the previous page.</h1>
              {countdown > 0 ? (
                <p>Redirecting in {countdown} seconds...</p>
              ) : (
                <p>Redirecting...</p>
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
                  <img src="/img/404.png" alt="Header Img" loading="lazy" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
