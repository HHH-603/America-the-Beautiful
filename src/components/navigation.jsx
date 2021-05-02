import React, { useState } from "react";
import { Link } from "gatsby";
import { Tests, Home, Constitution } from "../pages";
import ComingSoon from "../pages/coming-soon";

const Navigation = () => {
  const [sansToggle, withToggle] = useState(true);
  const [menubar, tiltMenubar] = useState(true);

  function handleToggle() {
    withToggle(!sansToggle);
  }

  function handleTilt() {
    tiltMenubar(!menubar);
  }

  return (
    <>
      <nav className="navigation">
        <div className="container_navbar-header">
          <Link className="link_navbar-header" to="/">
            ATB
          </Link>
        </div>
        <div className="container_navbar">
          <div className="container_navbar--links">
            <Link className="link_navbar" to="/" component={Home}>
              Home
            </Link>
            <Link
              className="link_navbar"
              to="/constitution"
              component={Constitution}
            >
              Constitution
            </Link>
            <Link className="link_navbar" to="/tests" component={Tests}>
              Tests
            </Link>
          </div>
          <div className="container_menu-icon">
            <div
              className={menubar ? "menu-bar" : "menu-bar-tilt"}
              onClick={() => {
                handleToggle();
                handleTilt();
              }}
            ></div>
          </div>
        </div>
      </nav>
      <div
        className={
          sansToggle
            ? "container_dropdown-menu--hidden"
            : "container_dropdown-menu"
        }
      >
        <Link className="link_drop-down" to="/about">
          Home
        </Link>
        <Link className="link_drop-down" to="/projects">
          Constitution
        </Link>
        <Link className="link_drop-down" to="/contact">
          Tests
        </Link>
      </div>
    </>
  );
};

export default Navigation;
