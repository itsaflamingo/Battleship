import {Gameboard} from './gameboard.js'
import {makeShips} from './ship.js'

let computerBoats = makeShips().computerBoats;
let playerBoats = makeShips().playerBoats;    

test('gameboard can set multiple ship locations', () => {
    expect(Gameboard(computerBoats).ComputerBoard().setLocation(computerBoats[0], [{id:'c1'}, {id:'c2'}, {id:'c3'}])).toMatchObject({
        boatName: 'Carrier',
        coordinates: [{id:'c1'}, {id:'c2'}, {id:'c3'}],
        length: 5,
        hitSpot: [],
        sunk: false,
    });
    expect(Gameboard(playerBoats).PlayerBoard().setLocation(playerBoats[0],  [{id:'p1'}, {id:'p2'}, {id:'p3'}])).toMatchObject({
        boatName: 'Carrier',
        coordinates:  [{id:'p1'}, {id:'p2'}, {id:'p3'}],
        length: 5,
        hitSpot: [],
        sunk: false,
    });
});
test('Gameboard can receive attack', () => {
    expect(Gameboard(computerBoats).ComputerBoard().receiveAttack('c2')).toMatchObject({
        boatName: 'Carrier',
        coordinates: [{id:'c1'}, {id:'c2'}, {id:'c3'}],
        length: 5,
        hitSpot: ['c2'],
        sunk: false,
    });

    expect(Gameboard(playerBoats).PlayerBoard().receiveAttack('p2')).toMatchObject({
        boatName: 'Carrier',
        coordinates: [{id:'p1'}, {id:'p2'}, {id:'p3'}],
        length: 5,
        hitSpot: ['p2'],
        sunk: false,
    });
});
test('if shot misses ship, it is added to array missedShots', () => {
    expect(Gameboard(playerBoats).PlayerBoard().receiveAttack('p90')).toMatchObject(['p90']);
});