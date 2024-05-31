import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import LazyLoadedVideo from "../components/LazyLoadedVideo";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { AchievementBanner } from "./components/banner";
import { CertificateSection } from "./components/certificateSection";

export const metadata = {
  title: "Achievements & Accreditations",
  description: `Showcasing my professional milestones and recognized expertise`,
};

function Achievement() {
  return (
    <>
      <div className="Portfolio_Achievement">
        <NavBar />
        <LazyLoadedVideo src="/img/bannerBackgroundVideo.mp4" />
        <AchievementBanner />
        <CertificateSection />
        <Footer />
      </div>
    </>
  );
}

export default Achievement;
