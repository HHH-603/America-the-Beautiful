import { Link } from "gatsby";
import React from "react";

const TestLandingPage = () => {
  return (
    <>
      <h1>Test Landing Page</h1>
      <h2>
        Would you like to test your knowledge of{" "}
        <Link to="/naturalization-test_easy">national American civics</Link>?
      </h2>
      <h2>
        Or would you prefer to focus on the history of{" "}
        <Link to="#">a particular State</Link>?
      </h2>
    </>
  );
};

export default TestLandingPage;
