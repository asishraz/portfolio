import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeAnime from "../../assets/home_anime.gif";
import "./Home.css";
import Modal from "../Modal/Modal";

class Home extends Component {
  state = { showModal: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showModal: true });
    }, 2000);
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="home-container">
        <div className="header-text">
          <h1>Welcome here</h1>
          <p>This is Asish, a front-end developer who loves solving problems</p>
        </div>

        {this.state.showModal && <Modal closeModal={this.closeModal} />}

        <div className="head-btns">
          <Link to="/about" className="btn btn-white">
            <p className="btn-text">More about ME!</p>
          </Link>
          <Link to="/contact" className="btn btn-transparent">
            <p className="btn-text">Connect with me</p>
          </Link>
        </div>
        <div className="splash-image">
          <img src={homeAnime} alt="animation" className="home-anime" />
        </div>
      </div>
    );
  }
}

export default Home;
