import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/googlePlay.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <Link to="/games">
          <button> PLAY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
