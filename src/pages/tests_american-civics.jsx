import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import ComingSoon from "./coming-soon";
import NaturalizationTest_Easy from "./naturalization-test_easy";

const testsAmericanCivics = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <h1>Tests - American Civics</h1>
          <p className="paragraph">
            How difficult do you want this test to be?
          </p>
          <Link
            className="link"
            to="/naturalization-test_easy"
            component={NaturalizationTest_Easy}
          >
            Easy
          </Link>
          <Link
            className="link"
            to="/naturalization-test_medium"
            component={ComingSoon}
          >
            Medium
          </Link>
          <Link
            className="link"
            to="/naturalization-test_hard"
            component={ComingSoon}
          >
            Hard
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default testsAmericanCivics;
