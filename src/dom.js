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

  function hitSquare(player, board, event) {
    const index = event ? event.target.dataset.index : null;
    const { ship, coordinate1D } = player.attack(board, index);
    const playerIndex = playerBoard.querySelector(
      `div[data-index="${coordinate1D}"]`
    );
    if (ship && event) {
      event.target.style.backgroundColor = "green";
    } else if (!ship && event) {
      event.target.style.backgroundColor = "red";
    } else if (ship) {
      playerIndex.style.backgroundColor = "green";
    } else {
      playerIndex.style.backgroundColor = "red";
    }
  }

  function checkEnd(boards) {
    return boards.some((board) => board.reportStatus());
  }

  function reportWinner(boards) {
    if (boards[1].reportStatus()) {
      console.log("you win");
    } else {
      console.log("you lost");
    }
  }

  function playGame(players, boards) {
    aiBoard.addEventListener(
      "mousedown",
      (event) => {
        hitSquare(players[0], boards[1], event);
        if (checkEnd(boards)) {
          reportWinner(boards);
          return;
        }
        hitSquare(players[1], boards[0], null);
        if (!checkEnd(boards)) {
          playGame(players, boards);
        } else {
          reportWinner(boards);
        }
      },
      { once: true }
    );
  }

  return { placeShips, hitSquare, playGame };
})();

export default Dom;
