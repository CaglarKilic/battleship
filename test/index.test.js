import Ship from "../src/ship";
import Gameboard from "../src/gameboard";
import Player from "../src/player";

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

test.only("Testing board", () => {
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
  expect(ship3).toBe(ship3);
  const ship4 = board.placeShip(5, 60, "vertical");
  expect(ship4).toBeNull();
  const ship5 = board.placeShip(2, 9, "horizontal");
  expect(ship5).toBeNull();
});

test("Receive attack", () => {
  const board = new Gameboard();
  board.placeShip(5, 50, "horizontal");
  board.receiveAttack(50);
  board.receiveAttack(51);
  board.receiveAttack(52);
  board.receiveAttack(53);
  board.receiveAttack(54);
  board.receiveAttack(55);
  expect(board.ships[50].isSunk()).toBeTruthy();
  expect(board.missed.length).toEqual(1);
  expect(board.missed.length + board.hit.length).toEqual(6);
});

test("Report status", () => {
  const board = new Gameboard();
  board.placeShip(3, 0, "horizontal");
  board.placeShip(2, 55, "vertical");
  board.receiveAttack(0);
  board.receiveAttack(1);
  board.receiveAttack(2);
  board.receiveAttack(55);
  board.receiveAttack(65);
  expect(board.reportStatus()).toBeTruthy();
});

test("Ai attacks", () => {
  const board = new Gameboard();
  board.placeShip(5, 45, "horizontal");
  const player = new Player(true);
  player.attack(board);
  player.attack(board);
  expect(board.missed.length + board.hit.length).toEqual(2);
});
