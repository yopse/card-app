import React from "react";
import "./index.css";
const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="name-designationweb">
        <h1 className="name-heading">Laura Smith</h1>
        <h3 className="name-designation">Frontend Developer</h3>
        <h3 className="name-website">laurasmith.website</h3>
      </div>
      <div className="find-meonweb">
        <button className="email-btn">
          <i class="fa fa-envelope" aria-hidden="true"></i> Email
        </button>

        <button className="link-btn">
          <i class="fa fa-envelope" aria-hidden="true"></i> LinkedIn
        </button>
      </div>

      <div className="aboutme-interests">
        <h1 className="about-me">About Me</h1>
        <p>
          i am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1 className="about-me interest-h">Interests</h1>
        <p>
        About I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
