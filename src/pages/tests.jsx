import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import ComingSoon from "./coming-soon";
import NaturalizationTest_Easy from "./naturalization-test_easy";

const Tests = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <h1>Test Landing Page</h1>
          <p>
            Would you like to test your knowledge of{" "}
            <Link
              to="/naturalization-test_easy"
              component={NaturalizationTest_Easy}
            >
              American civics
            </Link>
            ?
          </p>
          <p>
            Or would you prefer to focus on the history of{" "}
            <Link to="/coming-soon" component={ComingSoon}>
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
