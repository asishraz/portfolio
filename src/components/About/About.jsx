import React from "react";
import Header from "../Header/Header";
import aboutVector from "../../assets/about_vector.png";
import asish from "../../assets/asish.JPG";
import FooterLink from "../FooterLink/FooterLink";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="section-header">
      <div className="about-section section">
        {/* effect wrap start */}
        <div className="effect-wrap">
          <div className="effect effect-1"></div>

          <div className="effect effect-3"></div>
        </div>

        {/* effect wrap ends */}
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading="main info">About ME</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img">
              <div className="img-box inner-shadow">
                <img src={asish} alt="profile-pic" className="outer-shadow" />
              </div>
              {/* social media buttons */}
              <div className="social-links">
                <Link to="#" className="social outer-shadow hover-in-shadow">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="social outer-shadow hover-in-shadow">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="social outer-shadow hover-in-shadow">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="#" className="social outer-shadow hover-in-shadow">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="about-info">
              <p>
                <span>My name is Asish and I am a web developers</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis animi excepturi praesentium qui laudantium saepe,
                impedit vero aliquam ipsa non expedita et vitae maxime
                quibusdam, dignissimos nemo, sit perspiciatis! Voluptatibus.
              </p>
              <Link
                to="../../assets/cv.pdf"
                className=" btn-1 outer-shadow hover-in-shadow"
              >
                Download CV
              </Link>
              <Link to="#" className="btn-1 outer-shadow hover-in-shadow">
                Hire ME
              </Link>
            </div>
          </div>
          {/* about tabs */}
          <div className="row">
            <div className="about-tabs">
              <span
                className="tab-item outer-shadow active"
                data-target=".skills"
              >
                Skills
              </span>
              <span
                className="tab-item outer-shadow active"
                data-target=".experience"
              >
                Experience
              </span>
            </div>
          </div>

          {/* skills section */}
          <div className="row">
            <div className="skills tab-content">
              <div className="row">
                <div className="skill-item">
                  <p>HTML</p>
                  <div className="progress inner-shadow">
                    <div
                      className="progress-bar"
                      // style="width: calc(50% - 14px)"
                    >
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <p>JS</p>
                  <div className="progress inner-shadow">
                    <div
                      className="progress-bar"
                      // style="width: calc(50% - 14px)"
                    >
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <p>CSS</p>
                  <div className="progress inner-shadow">
                    <div
                      className="progress-bar"
                      // style="width: calc(50% - 14px)"
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <p>ReactJS</p>
                  <div className="progress inner-shadow">
                    <div
                      className="progress-bar"
                      // style="width: calc(50% - 14px)"
                    >
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* skills section */}
        </div>
      </div>
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;

{
  /* <Header
        heading="About me"
        details="I am a coder because I use my fingers wisely"
      />

      <div className="about-main">
        <div className="about-main-left">
          //sub section 
          <h3 className="about-sub-head">Coder</h3>
        </div>

        <div className="about-main-right"></div>
      </div>

      <FooterLink
        phrase="check out my "
        link="projects"
        toAddress="./projects"
      />
 */
}
