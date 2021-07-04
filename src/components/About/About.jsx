import React from "react";
import Header from "../Header/Header";
import aboutVector from "../../assets/about_vector.png";
import FooterLink from "../FooterLink/FooterLink";
import "./About.css";

const About = () => {
  return (
    <div className="section-header">
      <Header
        heading="About me"
        details="I am a coder because I use my fingers wisely"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* sub section */}
          <h3 className="about-sub-head">Coder</h3>
        </div>

        <div className="about-main-right"></div>
      </div>

      <FooterLink
        phrase="check out my "
        link="projects"
        toAddress="./projects"
      />

      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
