import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import ComingSoon from "./coming-soon";
import TestsAmericanCivics from "./tests_american-civics";

const Tests = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <h1>Test Landing Page</h1>
          <p>
            Would you like to test your knowledge of{" "}
            <Link
              className="link"
              to="/tests_american-civics"
              component={TestsAmericanCivics}
            >
              American civics
            </Link>
            ?
          </p>
          <p>
            Or would you prefer to focus on the history of{" "}
            <Link className="link" to="/coming-soon" component={ComingSoon}>
              a particular State
            </Link>
            ?
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Tests;
