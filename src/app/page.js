"use client";
import { Banner } from "./components/Banner";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import LazyLoadedVideo from "./components/LazyLoadedVideo";

export default function Home() {
  return (
    <div className="Portfolio_Rinith">
      <Navbar />
      <LazyLoadedVideo src="/img/bannerBackgroundVideo.mp4" />
      <Banner /> 
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
