import React from "react";
import "./NavBar.css";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    const { location } = this.props;
    console.log(location.pathname);

    const homeclass = location.pathname === "/" ? "active-item" : "";
    const aboutclass = location.pathname === "/about" ? "active-item" : "";
    const contactclass = location.pathname === "/contact" ? "active-item" : "";
    const projectsclass =
      location.pathname === "/projects" ? "active-item" : "";
    const skillsclass = location.pathname === "/skills" ? "active-item" : "";
    return (
      <Menu>
        <Link to="/" className={`menu-item ${homeclass}`}>
          {" home"}
        </Link>
        <Link to="/about" className={`menu-item ${aboutclass}`}>
          {" about"}
        </Link>
        <Link to="/contact" className={`menu-item ${contactclass}`}>
          {" contact"}
        </Link>
        <Link to="/projects" className={`menu-item ${projectsclass}`}>
          {" projects"}
        </Link>
        <Link to="/skills" className={`menu-item ${skillsclass}`}>
          {" skills"}
        </Link>

        {/* <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a> */}
      </Menu>
    );
  }
}

export default withRouter(NavBar);
