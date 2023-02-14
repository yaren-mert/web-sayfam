import React from "react";
import { githubLink } from "../content/content";
import { linkedlnLink } from "../content/content";
import { FaRegHandPointRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContainer">
        <footer>
          <h3>Contact me to work together on your project!</h3>
          <div className="contactInfo">
            <p>
              Email:{" "}
              <a href={FaRegHandPointRight} target="_blank" className="textDec">
                <FaRegHandPointRight
                  style={{
                    fontSize: "20px",
                    color: "black",
                  }}
                />
              </a>
              <a className="email" href="mailto:yarenmertt96@gmail.com">
                yarenmertt96@gmail.com
              </a>
            </p>
            <div className="website">
              <a className="github" href={githubLink} target="_blank">
                Github
              </a>
              <a className="linkedln" href={linkedlnLink} target="_blank">
                Linkedln
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
