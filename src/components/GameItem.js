import React from "react";
import {Link} from "react-router-dom";

function GameItem({ image, name, link }) {
  return (

        <div className="gameItem">
          <Link to={`/${link}`}>
            <div style={{ backgroundImage: `url(${image})` }}> </div>
          </Link>
          <h1> {name} </h1>
        </div>

  );
}

export default GameItem;
