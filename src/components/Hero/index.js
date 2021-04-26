import React from "react";
import fakeer from "../../assets/images/fakeer.png";
import "./style.css";

import Button from "../UI/Button";

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow justify-sb align-center">
        <div>
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Gareeb</span> CODER
          </p>
          <h1 className="textColor  ls-1 mtb-10">JS engineer</h1>
          <p className="font-20 grey mtb-10">Emerging Web Developer </p>

          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <div className="meRightImgContainer">
            <img src={fakeer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
