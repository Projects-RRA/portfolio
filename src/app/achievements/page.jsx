import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <div className="Portfolio_Achievement RRA-banner">
        <NavBar />
        <AchievementBanner />
        <CertificateSection />
        <Footer />
      </div>
    </>
  );
}

export default Achievement;
