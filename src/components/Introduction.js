import React from "react";
import { girisText } from "../content/content";
import Photo from "../content/Photo (2).jpg";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { githubLink } from "../content/content";
import { linkedlnLink } from "../content/content";

const Introduction = () => {
  return (
    <div id="intro">
      <div className="lineContainer">
        <div className="line"></div>

        <span>Yaren Mert</span>
      </div>
      <article className="introContent">
        <div className="introText">
          <h1>Creative thinker produces fast solutions.</h1>
          <p>{girisText}</p>
          <div className="introButtons">
            <a
              href="#contact"
              id="contactLink"
              style={{ backgroundColor: "#3730A3", color: "white" }}
              className="textDec"
            >
              <TfiEmail
                style={{
                  fontSize: "20px",
                }}
              />
              Contact Me
            </a>
            <a href={githubLink} target="_blank" className="textDec">
              <BsGithub
                style={{
                  fontSize: "20px",
                  color: "black",
                }}
              />
              Github
            </a>
            <a href={linkedlnLink} target="_blank" className="textDec">
              <BsLinkedin
                style={{
                  fontSize: "20px",
                  color: "blue",
                }}
              />
              Linkedln
            </a>
          </div>
        </div>
        <div>
          <img className="introImage" src={Photo} alt="introPhoto" />
        </div>
      </article>
    </div>
  );
};

export default Introduction;
