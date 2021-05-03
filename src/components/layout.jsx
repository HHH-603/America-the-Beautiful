import React from "react";
import "../styles/main.scss";
import Footer from "./footer";
import Navigation from "./navigation";
import "@fontsource/lobster";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <Navigation />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
