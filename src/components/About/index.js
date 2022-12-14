import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faSketch,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Passionate about technology for years, I've decided to change my
            career path and gain a deep understanding of programming and
            computer science.
            <br />
            For this reason, I graduated Full Stack Developer
            (Rails/Html/Css/Postgres) from Le Wagon in 2022 ✅
          </p>
          <p>
            Today, I want to learn more and take up new challenges. I am
            motivated and interested to continue to learn. As a job seeker, it's
            possible for me to be hired using POEl or AFPR in partnership with
            Pôle Emploi, this would help the company hiring me during the first
            3 months 🤝
          </p>
          <p>
            In the meantime, I'll keep on building my skills and developing
            projects in React + Next.js. Happy to chat ☕
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
              ></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faSketch}
                color="#C60300"
              ></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faGithub}
                color="#EC4D28"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
