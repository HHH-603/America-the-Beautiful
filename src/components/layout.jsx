import React from "react";
import "../styles/main.scss";
import Footer from "./footer";
import Navigation from "./navigation";
import "@fontsource/lobster";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className="layout">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
