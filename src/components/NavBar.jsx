import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.svg";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} flex items-center`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Brand Logo - Uses navbar-brand for that 9% width in CSS */}
        <a href="#home" className="navbar-brand">
          <img src={logo} alt="Logo" className="w-full" />
        </a>

        {/* Navigation Links - Uses navbar-nav for the spacing/opacity CSS */}
        <div className="navbar-nav hidden md:flex items-center">
          <a
            href="#home"
            className={`nav-link navbar-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`nav-link navbar-link ${activeLink === "skills" ? "active" : ""}`}
            onClick={() => setActiveLink("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`nav-link navbar-link ${activeLink === "projects" ? "active" : ""}`}
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </a>
        </div>

        {/* Social Icons & Connect Button */}
        <span className="navbar-text flex items-center">
          <div className="social-icons">
            <div className="social-icon flex items-center">
              <a href="https://www.linkedin.com/in/ana-khomasuridze-838b37198"   rel="noopener noreferrer" ><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Khomas5"><img src={navIcon2} alt="" /></a>
              <a href="https://www.upwork.com/freelancers/~0104153b1d763d94b2?mp_source=share"><img src={navIcon3} alt="" /></a>
            </div>
          </div>
          <button className="vvd connect-btn" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>

        {/* Mobile Toggler - Uses navbar-toggler-icon for the CSS lines */}
        <button className="navbar-toggler md:hidden">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};