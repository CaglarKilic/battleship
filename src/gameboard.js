import Ship from "./ship";

class Gameboard {
  #size = 10;

  #direction = { horizontal: 1, vertical: this.#size };

  constructor() {
    this.ships = {};
  }

  placeShip(length, coordinate1D, direction) {
    const coorDiff = (len, dir) => this.#direction[dir] * len;
    const valid = coordinate1D + coorDiff(length, direction) < this.#size ** 2;

    if (valid) {
      const ship = new Ship(length);
      for (let i = 0; i < length; i += 1) {
        this.ships[coordinate1D + coorDiff(i, direction)] = ship;
      }
      return ship;
    }

    return null;
  }
}

export default Gameboard;