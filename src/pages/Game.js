import React from "react";
import { GamesList } from "../helpers/GamesList";
import GameItem from "../components/GameItem";
import "../styles/Game.css";

function Game() {
  return (
    <div className="game">
      <div className="gameList">
        {GamesList.map((gameItem, key) => {
          return (
            <GameItem
              key={key}
              image={gameItem.image}
              name={gameItem.name}
              link={gameItem.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
