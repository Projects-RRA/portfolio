"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@app/components/NavBar";
import { Footer } from "@app/components/Footer";
import LazyLoadedVideo from "@app/components/LazyLoadedVideo";
import { Banner } from "@app/home/components/Banner";
import { Skills } from "@app/home/components/Skills";
import { Projects } from "@app/home/components/Projects";

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
