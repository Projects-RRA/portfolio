"use client";
import Link from "next/link"; // Import Link from next/link
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navLinks from "../../../public/data/navLinks.json";
import { scrollToSection } from "@app/utils";

const NavBar = () => {
  const { linkdin, gmail } = navLinks;
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setcurrentPath] = useState("/");
  const [isHomePage, setIsHomePage] = useState(true);
  const [expanded, setExpanded] = useState(false); // State for toggling menu

  useEffect(() => {
    const currentRoute = window.location.pathname;
    setcurrentPath(currentRoute);
  });

  useEffect(() => {
    if (currentPath !== "/") {
      setIsHomePage(false);
    }
  }, [currentPath]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close the menu on link click
  };

  return (
    <Navbar
      expand="md"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded} // Bind expanded state to Navbar
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle menu visibility
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Link
              href="/"
              className={`navbar-link ${
                activeLink === "/" ? "active" : ""
              } no-underline text-slate-50`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Link>
            {isHomePage && (
              <>
                <Link
                  href="#skills"
                  className={`navbar-link ${
                    activeLink === "skills" ? "active" : ""
                  } no-underline text-slate-50`}
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className={`navbar-link ${
                    activeLink === "projects" ? "active" : ""
                  } no-underline text-slate-50`}
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </Link>
              </>
            )}
            <Link
              href="/achievements"
              className={`navbar-link ${
                activeLink === "/achievements" ? "active" : ""
              } no-underline text-slate-50`}
              onClick={() => onUpdateActiveLink("achievements")}
            >
              Achievements
            </Link>
          </Nav>
          <span className="navbar-text">
            {/* <div className="social-icon">
              <a href={linkdin} target="_blank">
                <img src="/img/nav-icon1.svg" alt="" />
              </a>
              <a href={`mailto:${gmail}`}>
                <img src="/img/nav-icon4.svg" alt="" />
              </a>
            </div> */}
            {isHomePage && (
              <Link
                href="#RRA_ContactForm"
                onClick={() => onUpdateActiveLink("RRA_ContactForm")}
                className="RRA-ConnectButton no-underline"
              >
                <span>Let’s Connect</span>
              </Link>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
