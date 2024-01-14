class Player {
  constructor(ai = false) {
    this.ai = ai;
  }

  // eslint-disable-next-line class-methods-use-this
  #generateAiAttack(board) {
    const cand = [];
    for (let i = 0; i < board.size ** 2; i += 1) {
      if (board.missed.has(i) || board.hit.has(i)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      cand.push(i);
    }
    const r = Math.floor(Math.random() * cand.length);
    return cand[r];
  }

  attack(board, coordinate1D) {
    if (this.ai) {
      return board.receiveAttack(this.#generateAiAttack(board));
    }
    return board.receiveAttack(coordinate1D);
  }
}

export default Player;
