import React from "react";
import { githubLink } from "../content/content";
import { linkedlnLink } from "../content/content";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContainer">
        <footer>
          <h3>
            Contact me to work
            <br />
            together on your project!
          </h3>
          <div className="contactInfo">
            <p>
              <a>👉 Email: </a>
              <a className="email" href="mailto:yarenmertt96@gmail.com">
                yarenmertt96@gmail.com
              </a>
            </p>
            <div className="website">
              <a className="personalblog"> Personal Blog</a>
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
