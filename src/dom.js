const Dom = (() => {
  const playerBoard = document.querySelector("#player");
  const aiBoard = document.querySelector("#ai");

  for (let i = 0; i < 100; i += 1) {
    const squarePlayer = document.createElement("div");
    squarePlayer.setAttribute("data-index", i);
    playerBoard.appendChild(squarePlayer);
    
    const squareAi = document.createElement("div");
    squareAi.setAttribute("data-index", i);
    aiBoard.appendChild(squareAi);
  }

  function placeShips(player, ai) {
    Object.keys(player.ships).forEach((coor) => {
      document
        .querySelector(`#player>div[data-index="${coor}"]`)
        .classList.add("ship");
    });
    Object.keys(ai.ships).forEach((coor) => {
      document
        .querySelector(`#ai>div[data-index="${coor}"]`)
        .classList.add("ship");
    });
  }

  return { placeShips };
})();

export default Dom;
