import React from "react";
import Layout from "../components/layout";

const PageNotFound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <img
        src="https://media.giphy.com/media/4560Nv2656Gv0Lvp9F/giphy.gif"
        alt="these-are-not-the-droids-you-are-looking-for"
      />
      <p>This is not the page you are looking for.</p>
    </Layout>
  );
};

export default PageNotFound;
