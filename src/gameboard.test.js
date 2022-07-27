import {Gameboard} from './gameboard.js'
import {makeShips} from './ship.js'

let computerBoats = makeShips().computerBoats;
let playerBoats = makeShips().playerBoats;    

test('gameboard can set multiple ship locations', () => {
    expect(Gameboard(playerBoats).PlayerBoard().setLocation({boat: 'carrier', num: 15, isVertical: false})).toMatchObject({
        boatName: 'carrier',
        coordinates:  ['p15', 'p16', 'p17', 'p18', 'p19'],
        length: 5,
        hitSpot: [],
        sunk: false,
    })
    expect(Gameboard(playerBoats).PlayerBoard().setLocation({boat: 'battleship', num: 10, isVertical: true})).toMatchObject({
        boatName: 'battleship',
        coordinates:  [10, 20, 30, 40],
        length: 4,
        hitSpot: [],
        sunk: false,
    })
    expect(Gameboard(computerBoats).ComputerBoard().setLocation({boat: 'carrier', array: [10, 20, 30, 40, 50]})).toMatchObject({
        boatName: 'carrier',
        coordinates:  [10, 20, 30, 40, 50],
        length: 5,
        hitSpot: [],
        sunk: false,
    })
});
test('Gameboard can receive attack', () => {
    expect(Gameboard(computerBoats).ComputerBoard().receiveAttack(10)).toMatchObject({
        boatName: 'carrier',
        coordinates: [10, 20, 30, 40, 50],
        length: 5,
        hitSpot: [10],
        sunk: false,
    });

    expect(Gameboard(playerBoats).PlayerBoard().receiveAttack(10)).toMatchObject({
        boatName: 'battleship',
        coordinates: [10, 20, 30, 40],
        length: 4,
        hitSpot: [10],
        sunk: false,
    });
});
test('if shot misses ship, it is added to array missedShots', () => {
    expect(Gameboard(playerBoats).PlayerBoard().receiveAttack(80)).toMatchObject([80]);
});