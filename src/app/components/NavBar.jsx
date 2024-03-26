"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/">
        <img src="/img/logo.svg" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
        <div className="social-icon">
                <a href="#"><img src="/img/nav-icon1.svg" alt="" /></a>
                {/* Facebook and Instagram link */}
                {/* <a href="#"><img src="/img/nav-icon2.svg" alt="" /></a>
                <a href="#"><img src="/img/nav-icon3.svg" alt="" /></a> */}
              </div>
            <button className="vvd"><span>Let’s Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default NavBar;
