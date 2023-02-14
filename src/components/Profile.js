import React from "react";
import { aboutMe } from "../content/content";

const Profile = () => {
  return (
    <div id="profile" className="profile">
      <section>
        <h2 className="title">Profile</h2>
        <div className="profileContainer">
          <div className="profileCard">
            <h2>Profile</h2>
            <div className="infos">
              <div>
                <p>Birthday: </p>
                <p>City: </p>
                <p>Position: </p>
                <p>Education:</p>
              </div>
              <div>
                <p>01.01.1997</p>
                <p>Kocaeli</p>
                <p>Full Stack Developer</p>
                <p>
                  Avrasya University, Interior Architecture and Environmental
                  Design Bachelor, Graduate, 2021
                </p>
              </div>
            </div>
          </div>
          <div className="about">
            <h2>About Me</h2>
            <p>{aboutMe}</p>
          </div>
        </div>
      </section>
      <div className="lineeContainer1">
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Profile;
