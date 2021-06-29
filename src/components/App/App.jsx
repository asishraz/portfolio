import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Home from "../Home/Home";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import GoHome from "../GoHome/GoHome";

const App = () => {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <GoHome />
      </HashRouter>
    </div>
  );
};

export default App;
