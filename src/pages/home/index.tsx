import React from "react";
import "./_home.scss";

const Home = () => {
  return (
    <div className="home">
      {[...Array(100)].map((x) => (
        <div className="text">Home works!</div>
      ))}
    </div>
  );
};

export default Home;
