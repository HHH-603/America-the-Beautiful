import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import InterestingFacts from "./interesting-facts.json";
import Layout from "../components/layout";
import Tests from "./tests";

const Home = () => {
  const interestingFact = _.sample(InterestingFacts);
  return (
    <>
      <Layout>
        <div className="container">
          <h1>America the Beautiful</h1>
          <h2>Interesting Fact about America</h2>
          <p
            style={{
              fontStyle: "italic",
            }}
          >
            "{interestingFact}"
          </p>
          <p>
            So you think you know America?&nbsp;
            <Link className="link" to="/tests" component={Tests}>
              Then prove it!
            </Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Home;
