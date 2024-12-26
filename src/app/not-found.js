"use client";


import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@app/components/NavBar";
import LazyLoadedVideo from "@app/components/LazyLoadedVideo";
import { Footer } from "@app/components/Footer";
import { PageNotFound } from "@app/components/PageNotFound";

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