import { Ship } from './ship.js'
import {makeShips} from './ship.js'

let computerBoats = makeShips().computerBoats;
let playerBoats = makeShips().playerBoats;

test('factory function returns object', () => {
    expect(Ship('carrier', 5)).toMatchObject({
        boatName: 'carrier',
        length: 5,
        hitSpot: [],
        sunk: false,
    });
})

test('when hit, factory function returns modified object', () => {
    expect(Ship('carrier', 5).isHit(1, computerBoats)).toMatchObject({
        boatName: 'carrier',
        coordinates: [],
        length: 5,
        hitSpot: [1],
        sunk: false,
    });

    expect(Ship('carrier', 5).isHit(1, playerBoats)).toMatchObject({
        boatName: 'carrier',
        coordinates: [],
        length: 5,
        hitSpot: [1],
        sunk: false,
    })
})