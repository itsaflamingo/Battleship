import {Players} from './player.js'
import {Gameboard} from './gameboard.js'
import {ships} from './ship.js'

Gameboard().ComputerBoard().setLocation(ships.carrier(), 2, 3, 4)
test('player can attack computer multiple times', () => {
    expect(Players().Player().playerAttack(4)).toMatchObject({
        boatName: 'Carrier',
        coordinates: [2, 3, 4],
        length: 5,
        hitSpot: [4],
        sunk: false,
    })
})