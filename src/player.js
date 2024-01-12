class Player {
  constructor(ai = false) {
    this.ai = ai;
  }

  attack(board, coordinate1D = 45) {
    if (
      (board.missed.includes(coordinate1D) || coordinate1D in board.ships) &&
      this.ai
    ) {
      this.attack(board, Math.floor(Math.random() * board.size ** 2));
    } else {
      board.receiveAttack(coordinate1D);
    }
  }
}

export default Player;
