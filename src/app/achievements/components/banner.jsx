"use client";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const AchievementBanner = () => {

  return (
    <section className="banner RR_AchievementBanner" id="404">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <span className="tagline RR_AchievementBannerHead">
                Achievements & Accreditations
              </span>
              <h1 className="RR_AchievementBannerSubHead">
                Showcasing my professional milestones and recognized expertise.
              </h1>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src="/img/achievementBannerImage.png"
                    alt="Header Img"
                    loading="lazy"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
