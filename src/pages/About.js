import React from "react";
import Banner from "../assets/banner.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
      className="aboutTop"
      style={{backgroundImage: `url(${Banner})`}}
      />
      <div className="aboutBottom">
        <p>
          INFM316 Разработка на софтуер като услуга
        </p>
        <p>
          Проект на Петър Стоянов F102248
        </p>
      </div>
    </div>
  );
}

export default About;
