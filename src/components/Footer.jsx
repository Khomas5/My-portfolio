import "./Footer.css";

import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="footer-right">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ana-khomasuridze-838b37198"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Khomas5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              <a
                href="https://www.upwork.com/freelancers/~0104153b1d763d94b2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Upwork" />
              </a>
            </div>

            <p>Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;