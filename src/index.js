// import Player from "./player";
import Gameboard from "./gameboard";
import Dom from "./dom";
import "./style.css";

(() => {
  // const player = new Player();
  // const ai = new Player(true);
  const playerBoard = new Gameboard();
  const aiBoard = new Gameboard();

  for (let i = 1; i < 6; i += 1) {
    playerBoard.placeShip(i, i * 10, "horizontal");
    aiBoard.placeShip(i, i * 10, "horizontal");
  }

  Dom.placeShips(playerBoard);
  const hitPlayer = Dom.hitSquare.bind(null, playerBoard);
  const hitAi = Dom.hitSquare.bind(null, aiBoard);
  document.querySelector("#player").addEventListener("click", hitPlayer);
  document.querySelector("#ai").addEventListener("click", hitAi);
})();
