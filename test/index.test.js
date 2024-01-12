import Ship from "../src/ship";
import Gameboard from "../src/gameboard";

test("Testing hit funtion", () => {
  const ship = new Ship();
  ship.hit();
  expect(ship.hitCount).toEqual(1);
  ship.hit();
  expect(ship.hitCount).toEqual(2);
});

test("Testing isSunk", () => {
  const ship = new Ship();
  ship.length = 5;
  ship.hitCount = 3;
  expect(ship.isSunk()).toBeFalsy();
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

test("Testing board", () => {
  const board = new Gameboard();
  const ship = board.placeShip(5, 0, "horizontal");
  expect(board.ships[0]).toBe(ship);
  expect(board.ships[1]).toBe(ship);
  expect(board.ships[2]).toBe(ship);
  expect(board.ships[3]).toBe(ship);
  expect(board.ships[4]).toBe(ship);
  const ship2 = board.placeShip(5, 0, "vertical");
  expect(board.ships[0]).toBe(ship2);
  expect(board.ships[10]).toBe(ship2);
  expect(board.ships[20]).toBe(ship2);
  expect(board.ships[30]).toBe(ship2);
  expect(board.ships[40]).toBe(ship2);
  const ship3 = board.placeShip(5, 95, "horizontal");
  expect(ship3).toBeNull();
  const ship4 = board.placeShip(5, 60, "vertical");
  expect(ship4).toBeNull();
});
