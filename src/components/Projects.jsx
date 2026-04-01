import { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.png";
import projImg7 from "../assets/images/project-img7.png";
import projImg9 from "../assets/images/project-img9.png";
import projImg10 from "../assets/images/project-img10.png";
import projImg11 from "../assets/images/project-img11.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg1,
      url: "https://khomas5.github.io/cluster/",
    },
    {
      title: "Analityco",
      description: "front-end development",
      imgUrl: projImg2,
      url: "https://khomas5.github.io/Analytico/",
    },
    {
      title: "iMedical",
      description: "front-end development",
      imgUrl: projImg3,
      url: "https://khomas5.github.io/iMedical/",
    },

    {
      title: "JS Games",
      description: "Javascript",
      imgUrl: projImg4,
      url: "https://khomas5.github.io/JS-games/",
    },

    {
      title: "Shopping Website",
      description: "Javascript",
      imgUrl: projImg11,
      url: "https://khomas5.github.io/javascript-amazon-project/",
    },
    {
      title: "Epic-Play",
      description: "Webflow",
      imgUrl: projImg7,
      url: "https://epic-play-8a0a06.webflow.io",
    },

    {
      title: "Omnifood",
      description: "front-end development",
      imgUrl: projImg5,
      url: "https://khomas5.github.io/omnifood-project/",
    },

    {
      title: "Nexter",
      description: "front-end development",
      imgUrl: projImg6,
      url: "https://khomas5.github.io/Nexter/",
    },
  ];

  const reactProjects = [
    {
      title: "HooBank",
      description: "Vite + React Project with TailwindCSS",
      imgUrl: projImg10,
      url: "https://bank-digital.netlify.app",
    },
    {
      title: "Travel",
      description: "React Project",
      imgUrl: projImg9,
      url: "https://khomas5.github.io/Travel/",
    },
  ];

  return (
  <section className="project" id="projects">
      <div className="projects-container">
        <div className="projects-title">
          <h2>Projects</h2>
          <p>
            I designed and developed a responsive portfolio website to
            showcase my skills, experience, and projects. The main objective
            was to create an intuitive and visually appealing interface that
            highlights my abilities as a front-end developer. Tab One shows
            mostly projects based on plain HTML5, CSS3/SCSS, Javascript and
            one of them is built by in-browser design tool Webflow. Tab Two
            concentrate on React and its projects.
          </p>
        </div>

        <div className="projects-tabs-container mx-auto w-full max-w-4xl px-4">
          <div className="projects-tabs nav-pills">
            <div className="projects-tabs-item">
              <button
                type="button"
                className={`projects-tabs-item-link ${activeTab === "first" ? "active" : ""}`}
                onClick={() => setActiveTab("first")}
              >
                Tab one
              </button>
            </div>

            <div className="projects-tabs-item">
              <button
                type="button"
                className={`projects-tabs-item-link ${activeTab === "second" ? "active" : ""}`}
                onClick={() => setActiveTab("second")}
              >
                Tab two
              </button>
            </div>

            <div className="projects-tabs-item">
              <button
                type="button"
                className={`projects-tabs-item-link ${activeTab === "third" ? "active" : ""}`}
                onClick={() => setActiveTab("third")}
              >
                Tab three
              </button>
            </div>
          </div>

          <div className="projects-tabs-container-content">
            {activeTab === "first" && (
              <div className="projects-row">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </div>
            )}

            {activeTab === "second" && (
              <div className="projects-row">
                {reactProjects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </div>
            )}

            {activeTab === "third" && (
              <div className="projects-note">
                I plan to further enhance the website by integrating
                additional projects, optimizing for accessibility, and
                exploring new front-end technologies to stay current with
                industry trends.
              </div>
            )}
          </div>
        </div>
      </div>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
  // return (
  //     <section className="relative py-20 bg-black text-white " id="projects">
  //       <div className="container mx-auto px-4 m-8">
  //         <div className="flex flex-col items-center text-center">
  //           {/* Header Section */}
  //           <div className="animate__animated animate__flipInX">
  //             <h2 className="text-5xl font-bold mb-4">Projects</h2>
  //             <p className="text-gray-400 text-lg tracking-wide leading-relaxed mx-auto mb-10 w-full">
  //               I designed and developed a responsive portfolio website to showcase my skills,
  //               experience, and projects. Tab One shows mostly projects based on HTML5,
  //               CSS3/SCSS, Javascript. Tab Two concentrates on React.
  //             </p>
  //           </div>

  //           {/* Tab Navigation (Pills) */}
  //           <div className="flex w-full md:w-[72%] bg-white/10 rounded-[50px] overflow-hidden mb-50 border border-white/20">
  //             {["first", "second", "third"].map((tab, index) => (
  //               <button
  //                 key={tab}
  //                 onClick={() => setActiveTab(tab)}
  //                 className={`flex-1 py-4 text-lg font-medium tracking-wide transition-all duration-300 relative z-10
  //                   ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"}
  //                   ${index === 0 ? "rounded-l-[50px]" : ""}
  //                   ${index === 2 ? "rounded-r-[50px]" : ""}
  //                   ${activeTab === tab ? "bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]" : "bg-transparent"}
  //                 `}
  //               >
  //                 {tab === "first" ? "Tab One" : tab === "second" ? "React" : "Tab Three"}
  //               </button>
  //             ))}
  //           </div>

  //           {/* Tab Content */}
  //           <div className="w-full transition-opacity duration-500">
  //             {activeTab === "first" && (
  //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate__animated animate__fadeIn">
  //                 {projects.map((project, index) => (
  //                   <ProjectCard key={index} {...project} />
  //                 ))}
  //               </div>
  //             )}

  //             {activeTab === "second" && (
  //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate__animated animate__fadeIn">
  //                 {reactProjects.map((project, index) => (
  //                   <ProjectCard key={index} {...project} />
  //                 ))}
  //               </div>
  //             )}

  //             {activeTab === "third" && (
  //               <div className="py-10 animate__animated animate__fadeIn text-gray-300 text-lg max-w-2xl mx-auto">
  //                 I plan to further enhance the website by integrating additional projects,
  //                 optimizing for accessibility, and exploring new front-end technologies.
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>

  //       {/* Background Image */}
  //       <img
  //         className="absolute right-0 w-[35%] -z-10 pointer-events-none opacity-10
  //         0"
  //         src={colorSharp2}
  //         alt="background"
  //       />
  //     </section>
  //   );
};

export default Projects;
