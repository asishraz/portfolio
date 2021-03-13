import React from "react";
import Aux from "hoc/Auxiliary";
import Navbar from "components/Navigation/";
import About from "components/About/";

const Layout = (props) => {
  return (
    <Aux>
      <Navbar />
      {props.children}
    </Aux>
  );
};

export default Layout;
