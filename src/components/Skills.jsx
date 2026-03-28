// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselModule from "react-multi-carousel";
const Carousel = CarouselModule.default;

import "./Skills.css";

import meter1 from "../assets/images/meter1.png";
import meter2 from "../assets/images/meter2.png";
import meter3 from "../assets/images/meter3.png";
import meter4 from "../assets/images/meter4.png";
import meter5 from "../assets/images/meter5.png";
import meter6 from "../assets/images/meter6.png";
import meter7 from "../assets/images/meter7.png";
import meter8 from "../assets/images/67109815.png";
import meter9 from "../assets/images/meter9.png";
import meter10 from "../assets/images/meter10.png";
import meter11 from "../assets/images/meter11.png";
import meter12 from "../assets/images/meter12.png";
import meter13 from "../assets/images/meter13.png";
import meter14 from "../assets/images/meter14.png";
import colorSharp from "../assets/images/color-sharp.png";

const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (

    <section className="skill" id="skills">
      <div className="skills-container">
        <div className="skills-row">
          <div className="skills-column">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I have hands-on experience with HTML, CSS, and Sass for building
                responsive and visually appealing web layouts. I work with
                JavaScript and React to create dynamic, interactive user
                interfaces. I’m familiar with modern styling frameworks like
                Bootstrap and Tailwind CSS, and I use Git and GitHub for version
                control and collaboration. Additionally, I design user-friendly
                interfaces and prototypes in Figma, bringing both creativity and
                technical precision to my projects.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="img" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="img" />
                  <h5>CSS5</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="img" />
                  <h5>Saas</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="img" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="img" />
                  <h5>jQuery</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="img" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="img" />
                  <h5>Tailwind CSS</h5>
                </div>

                <div className="item">
                  <img src={meter7} alt="img" />
                  <h5>Webflow</h5>
                </div>

                <div className="item">
                  <img src={meter11} alt="img" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="img" />
                  <h5>GitHub</h5>
                </div>

                <div className="item">
                  <img src={meter12} alt="img" />
                  <h5>Figma</h5>
                </div>

                <div className="item">
                  <img src={meter13} alt="img" />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img src={meter14} alt="img" />
                  <h5>Adobe Photoshop</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-left"
      />
    </section>
  );
};

export default Skills;
