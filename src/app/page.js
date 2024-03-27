"use client";
import { Banner } from "./components/Banner";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="Portfolio_Rinith">
      <video autoPlay muted loop id="bg-video">
        <source src="/img/bannerBackgroundVideo.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <Banner /> 
      <Skills />
    </div>
  );
}
