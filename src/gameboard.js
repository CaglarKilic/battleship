import Ship from "./ship";

class Gameboard {
  size = 10;

  #direction = { horizontal: 1, vertical: this.size };

  constructor() {
    this.ships = new Set();
    this.missed = new Set();
    this.hit = new Set();
  }

  placeShip(length, coordinate1D, direction) {
    const coorDiff = (len, dir) => this.#direction[dir] * (len - 1);
    const validVertical =
      coordinate1D + coorDiff(length, direction) < this.size ** 2;
    const validHorizontal = (length + coordinate1D) % 10 > coordinate1D % 10;

    const valid = { horizontal: validHorizontal, vertical: validVertical };

    if (valid[direction]) {
      const ship = new Ship(length);
      for (let i = 0; i < length; i += 1) {
        this.ships[coordinate1D + i * this.#direction[direction]] = ship;
      }
      return ship;
    }

    return null;
  }

  receiveAttack(coordinate1D) {
    const ship = this.ships[coordinate1D];
    if (ship) {
      ship.hit();
      this.hit.add(coordinate1D);
    } else {
      this.missed.add(coordinate1D);
    }
    return { ship, coordinate1D };
  }

  reportStatus() {
    return Object.values(this.ships).every((ship) => ship.isSunk());
  }
}

export default Gameboard;
