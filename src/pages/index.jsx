import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import InterestingFacts from "./interesting-facts.json";

const Home = () => {
  const interestingFact = _.sample(InterestingFacts);
  return (
    <>
      <h1>America the Beautiful</h1>
      <h2>Interesting Fact about America</h2>
      <p>{interestingFact}</p>
      <Link to="/naturalization-test_easy">Take the (Easy) Test!</Link>
    </>
  );
};

export default Home;
