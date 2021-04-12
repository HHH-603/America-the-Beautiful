import React from "react";
import "../styles/main.scss";

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
