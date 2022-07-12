import {Gameboard} from './gameboard.js'
import {ships} from './ship.js'

test('gameboard can set multiple ship locations', () => {
    expect(Gameboard().ComputerBoard().setLocation(ships.carrier(), 2, 3, 4)).toMatchObject({
        boatName: 'Carrier',
        coordinates: [2, 3, 4],
        length: 5,
        hitSpot: [],
        sunk: false,
    });
    expect(Gameboard().PlayerBoard().setLocation(ships.carrier(), 2, 3, 4)).toMatchObject({
        boatName: 'Carrier',
        coordinates: [2, 3, 4],
        length: 5,
        hitSpot: [],
        sunk: false,
    });
});
test('Gameboard can receive attack', () => {
    expect(Gameboard().ComputerBoard().receiveAttack(2)).toMatchObject({
        boatName: 'Carrier',
        coordinates: [2, 3, 4],
        length: 5,
        hitSpot: [2],
        sunk: false,
    });

    expect(Gameboard().PlayerBoard().receiveAttack(2)).toMatchObject({
        boatName: 'Carrier',
        coordinates: [2, 3, 4],
        length: 5,
        hitSpot: [2],
        sunk: false,
    });
});
test('if shot misses ship, it is added to array missedShots', () => {
    expect(Gameboard().PlayerBoard().receiveAttack(10)).toMatchObject([10]);
});