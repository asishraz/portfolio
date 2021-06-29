import "./GoHome.css";
import React, { Component } from "react";
import HomeWhite from "../../assets/home_white.png";
import HomeBlack from "../../assets/home_black.png";
import { withRouter } from "react-router-dom";

class GoHome extends Component {
  navigatetohome = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    const { location } = this.props;
    const whiteBtn = location.pathname === "/";
    return (
      <button
        className={`go-home-btn ${whiteBtn ? "white-bkg" : "gradient-bkg"}`}
        onClick={this.navigatetohome}
      >
        <img
          className="home-icon"
          src={whiteBtn ? HomeBlack : HomeWhite}
          alt="white home logo"
        />
      </button>
    );
  }
}

export default withRouter(GoHome);
