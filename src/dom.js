/* eslint-disable no-param-reassign */
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

  function placeShips(player) {
    Object.keys(player.ships).forEach((coor) => {
      document
        .querySelector(`#player>div[data-index="${coor}"]`)
        .classList.add("ship");
    });
  }

  function hitSquare(player, event) {
    const { index } = event.target.dataset;
    const ship = player.receiveAttack(index);
    if (ship) {
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
    }
  }

  return { placeShips, hitSquare };
})();

export default Dom;
