export default class Ship {
  constructor(length = 1) {
    this.length = length;
    this.hitCount = 0;
  }

  hit() {
    this.hitCount += 1;
  }

  isSunk() {
    return this.hitCount === this.length;
  }
}
