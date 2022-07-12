import { Ship } from './ship.js'

test('factory function returns object', () => {
    expect(Ship('Carrier', 5)).toMatchObject({
        boatName: 'Carrier',
        length: 5,
        hitSpot: [],
        sunk: false,
    });
})

test('when hit, factory function returns modified object', () => {
    expect(Ship('Destroyer', 2).isHit(1, ships)).toMatchObject({
        boatName: 'Destroyer',
        coordinates: [],
        length: 2,
        hitSpot: [1],
        sunk: false,
    });
})