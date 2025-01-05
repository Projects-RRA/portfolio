"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@app/components/NavBar";
import { Footer } from "@app/components/Footer";
import { Banner } from "@app/home/components/Banner";
import { Skills } from "@app/home/components/Skills";
import { Projects } from "@app/home/components/Projects";
import { ContactMeForm } from "@app/home/contact";

export default function Home() {
  return (

    <div className="Portfolio_Rinith RRA-banner">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <ContactMeForm />
      <Footer />
    </div>
  );
}
