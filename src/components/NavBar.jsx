import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo4.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.svg";
import arrow from "../assets/images/arrow-left-solid-full.svg";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} flex items-center`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="navbar-brand" onClick={() => handleNavClick("home")}>
          <img src={logo} alt="Logo" className="w-full" />
        </a>

        <div className="navbar-nav hidden md:flex items-center">
          <a
            href="#home"
            className={`nav-link navbar-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`nav-link navbar-link ${activeLink === "skills" ? "active" : ""}`}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`nav-link navbar-link ${activeLink === "projects" ? "active" : ""}`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </a>
        </div>

        <span className="navbar-text hidden md:flex items-center">
          <div className="social-icons">
            <div className="social-icon flex items-center">
              <a href="https://www.linkedin.com/in/ana-khomasuridze-838b37198" rel="noopener noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Khomas5">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.upwork.com/freelancers/~0104153b1d763d94b2?mp_source=share">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </div>

          <button className="vvd connect-btn" onClick={() => console.log("connect")}>
            <img src={arrow} className="arrow-image" alt="" />
            <span>Let's Connect</span>
          </button>
        </span>

        <button
          className="navbar-toggler md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="mobile-menu md:hidden">
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            href="#skills"
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </a>

         
        </div>
      )}
    </nav>
  );
};