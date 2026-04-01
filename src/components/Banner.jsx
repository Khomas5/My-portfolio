import { useState, useEffect, useCallback } from "react";
import headerImg from "../assets/images/header-img.svg";
import "./Banner.css";

import useInView from "../hooks/useInView"; // adjust path

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(() => 300 - Math.random() * 100);
  const [ref, isVisible] = useInView();

  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Front-end Developer"];

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
<section className="banner" id="home">
  <div className="banner-container">
    <div
      ref={ref}
      className={`banner-content transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="banner-text">
        <span className="tagline">Welcome to my Portfolio</span>

        <h1>
          {`Hi! I'm Ana, `}
          <span
            className="txt-rotate"
            data-period="1000"
            data-rotate='[ "Web Developer"]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>

        <p className="banner-description">
          I began my journey in front-end web development in early
          2022, starting with a 6-month course where I learned HTML, CSS,
          JavaScript, and the basics of Angular. During the same period,
          I participated in the Women Tech Hub project at Ilia State
          University, funded by the British Council, where I gained both
          theoretical knowledge and hands-on experience in web
          development. To deepen my skills, I continued learning
          through Udemy courses focused on advanced CSS, SCSS, and
          JavaScript. In October 2022, I joined Ascended as an intern,
          where I worked on real projects, strengthened my practical
          skills, and gained valuable industry experience.
          Currently, I’m expanding my knowledge by studying React and
          continuing to grow as a developer.
        </p>

        <button onClick={() => console.log("connect")}>
          Let's Connect
        </button>
      </div>

      <div className="banner-image">
        <img
          src={headerImg}
          alt="Banner Illustration"
          className="banner-img"
        />
      </div>
    </div>
  </div>
</section>

    // <section className="banner" id="home">

    //   <div className="container mx-auto px-4">
    //     <div className="flex">
    //       <div className="w-full">
    //         <span className="tagline fade-in-up">Welcome to my Portfolio</span>
    //         <h1>
    //                   {`Hi! I'm Ana,`}
    //                   <span
    //                     className="txt-rotate"
    //                     data-period="1000"
    //                     data-rotate='[ "Web Developer"]'
    //                   >
    //                     <span className="wrap">{text}</span>
    //                   </span>{" "}
    //                 </h1>
    //          <p className="banner-description">
    //                   I began my journey in front-end web development in early
    //                   2022, starting with a 6-month course where I learned HTML,
    //                   CSS, JavaScript, and the basics of Angular. During the same
    //                   period, I participated in the Women Tech Hub project at Ilia
    //                   State University, funded by the British Council, where I
    //                   gained both theoretical knowledge and hands-on experience in
    //                   web development.
    //                   <br />
    //                   To deepen my skills, I continued learning through Udemy
    //                   courses focused on advanced CSS, SCSS, and JavaScript. In
    //                   October 2022, I joined Ascended as an intern, where I worked
    //                   on real projects, strengthened my practical skills, and
    //                   gained valuable industry experience.
    //                   <br />
    //                   Currently, I’m expanding my knowledge by studying React and
    //                   continuing to grow as a developer.
    //                 </p>
    //         <button onClick={() => console.log('connect')}>Let's Connect</button>
    //       </div>

    //       <div className="w-full flex justify-center md:justify-end">
    //           <div className="w-full max-w-md lg:max-w-xl xl:max-w-2xl">
    //             {/* Ensure 'headerImg' is imported at the top of your file */}
    //             <img
    //               src={headerImg}
    //               alt="Banner Illustration"
    //               className="w-full h-auto object-contain animate-updown"
    //             />
    //           </div>
    //         </div>
    //     </div>
    //   </div>

    // </section>
  );
};
//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <span className="tagline">Welcome to my Portfolio</span>
//                   <h1>
//                     {`Hi! I'm Ana,`}
//                     <span
//                       className="txt-rotate"
//                       dataPeriod="1000"
//                       data-rotate='[ "Web Developer"]'
//                     >
//                       <span className="wrap">{text}</span>
//                     </span>{" "}
//                   </h1>

//                   <p className="banner-description">
//                     I began my journey in front-end web development in early
//                     2022, starting with a 6-month course where I learned HTML,
//                     CSS, JavaScript, and the basics of Angular. During the same
//                     period, I participated in the Women Tech Hub project at Ilia
//                     State University, funded by the British Council, where I
//                     gained both theoretical knowledge and hands-on experience in
//                     web development.
//                     <br />
//                     To deepen my skills, I continued learning through Udemy
//                     courses focused on advanced CSS, SCSS, and JavaScript. In
//                     October 2022, I joined Ascended as an intern, where I worked
//                     on real projects, strengthened my practical skills, and
//                     gained valuable industry experience.
//                     <br />
//                     Currently, I’m expanding my knowledge by studying React and
//                     continuing to grow as a developer.
//                   </p> <button onClick={() => console.log("connect")}>
//                    <a href="
// https://www.linkedin.com/in/ana-khomasuridze-838b37198?utm_source=share_via&utm_content=profile&utm_medium=member_android">Let’s Connect</a>
//                   </button>
//                   {/*
//                   <a href="./assets/images/Ana-Khomasuridze.pdf" download="Ana-Khomasuridze.pdf">helooo</a>
//                   <a href="./assets/images/cv.pdf" download>Download the pdf</a>
//                   <a href="./assets/images/cv.pdf" download="cv">Download the pdf file</a>
//                    */}
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__zoomIn" : ""
//                   }
//                 >
//                   <img src={headerImg} alt="Header Img" />
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
// </section>
// );

export default Banner;
