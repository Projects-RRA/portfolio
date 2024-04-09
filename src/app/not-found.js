"use client";


import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import LazyLoadedVideo from "./components/LazyLoadedVideo";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./components/PageNotFound";

export default function FourOhFour() {
  
  return (
    <div className="Portfolio_Rinith">
      <NavBar />
      <LazyLoadedVideo src="/img/bannerBackgroundVideo.mp4" />
      <PageNotFound />
      <Footer />
    </div>
  );
}