import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to HandCricket Game </h2>
      
      <div>
        <Link to="/toss">
          <button className="home-button">Play Match</button>
        </Link>
        <Link to="/practice">
          <button className="home-button">Practice</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
