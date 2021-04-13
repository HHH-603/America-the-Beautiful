import React from "react";
import Layout from "../components/layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Page Not Found</h1>
        <img
          className="image_gif"
          src="https://media.giphy.com/media/4560Nv2656Gv0Lvp9F/giphy.gif"
          alt="these-are-not-the-droids-you-are-looking-for"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading="eager"
          placeholder="blurred"
          type="image/gif"
        />
        <p>This is not the page you are looking for.</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
