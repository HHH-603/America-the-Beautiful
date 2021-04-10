import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import InterestingFacts from "./interesting-facts.json";
import Layout from "../components/layout";

const Home = () => {
  const interestingFact = _.sample(InterestingFacts);
  return (
    <>
      <Layout>
        <h1>America the Beautiful</h1>
        <h2>Interesting Fact about America</h2>
        <p>{interestingFact}</p>
        <Link to="/test-landing-page">
          So you think you know America? Then prove it!
        </Link>
      </Layout>
    </>
  );
};

export default Home;
