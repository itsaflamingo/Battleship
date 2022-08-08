import {gameEnd} from './game-end.js'
import { ps } from './pubsub.js'

//ship factory function. returns ship information, including if it has been sunk, where it was hit, and its location.
function Ship (name, length) { 

    const isHit = (hit, playerArr) => {
        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName)
        thisBoat[0].hitSpot.push(hit)
        return _isSunk(playerArr, thisBoat[0])
    }
    const _isSunk = (playerArr, thisBoat) => {
        if(thisBoat.hitSpot.length === thisBoat.length) {
            thisBoat.sunk = true
            const sunkBoats = playerArr.filter(arr => arr.sunk === true)
            const location = thisBoat.coordinates[0]
            ps.publish('boat-sunk-msg', location)   
            if(sunkBoats.length === 5) {
                gameEnd(playerArr)
            }
        }
        return thisBoat;
    }
    const shipLocation = (location = [], playerArr = []) => {
        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName)
        thisBoat[0].coordinates = location
        return thisBoat[0]    
    }

    const boat = {
        boatName: name,
        coordinates: [],
        length: length,
        hitSpot: [],
        sunk: false,
        isHit,
        shipLocation
    }

    return boat;
}

const makeShips = () => {
    let carrier = () => Ship('carrier', 5)
    let battleship = () => Ship('battleship', 4)
    let cruiser = () => Ship('cruiser', 3)
    let submarine = () => Ship('submarine', 3)
    let destroyer = () => Ship('destroyer', 2)

    let computerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ]
    let playerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ]

    return {
        computerBoats, 
        playerBoats
    }
}

export {Ship, makeShips}