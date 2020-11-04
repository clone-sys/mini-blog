import React from "react";
import Hello from "../components/Hello";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Hello />
      <h3 className="mt-3 mb-4">Welcome to the Mini Blog</h3>
      <img src="https://placekitten.com/400/500" alt="preview" />
    </>
  );
};

export default Home;
