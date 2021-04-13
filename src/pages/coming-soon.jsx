import React from "react";
import Layout from "../components/layout";

const ComingSoon = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Coming soon!</h1>
        <img
          className="image_gif"
          src="https://media.giphy.com/media/Px2Zu55ofxfO0/giphy.gif"
          alt="excited-dolphin"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading="eager"
          placeholder="blurred"
          type="image/gif"
        />
        <p>This page isn't available...yet. But it will be *very* soon.</p>
      </div>
    </Layout>
  );
};

export default ComingSoon;
