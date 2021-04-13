import React from "react";
import "../styles/main.scss";
import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className="layout">{props.children}</div>
    </>
  );
};

export default Layout;
