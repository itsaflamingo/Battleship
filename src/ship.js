import { gameEnd } from './game-end.js'
import { ps } from './pubsub.js'

//ship factory function. returns ship information, including if it has been sunk, where it was hit, and its location.
function Ship (name, length) {

    const isHit = (hit, playerArr) => {
        const thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName);
        thisBoat[0].hitSpot.push(hit);
        return _isSunk(playerArr, thisBoat[0]);
    }

    const _isSunk = (playerArr, thisBoat) => {

        if(thisBoat.hitSpot.length === thisBoat.length) {
            thisBoat.sunk = true;
            const sunkBoats = playerArr.filter(arr => arr.sunk === true);
            const location = thisBoat.coordinates[0];
            ps.publish('boat-sunk-msg', location);   

            if(sunkBoats.length === 5) {
                gameEnd(playerArr);
            }
        }
        return thisBoat;
    }
    const shipLocation = (location = [], playerArr = []) => {
        const thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName);
        thisBoat[0].coordinates = location;
        return thisBoat[0];    
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

    const _carrier = () => Ship('carrier', 5);
    const _battleship = () => Ship('battleship', 4);
    const _cruiser = () => Ship('cruiser', 3);
    const _submarine = () => Ship('submarine', 3);
    const _destroyer = () => Ship('destroyer', 2);

    const createShipArray = () => {
        const computerBoats = [ _carrier(), _battleship(), _cruiser(), _submarine(), _destroyer() ];
        const playerBoats = [ _carrier(), _battleship(), _cruiser(), _submarine(), _destroyer() ];

        return {
            computerBoats,
            playerBoats
        }
    }

    return {
        createShipArray,
    }

}

function playerBoatLocations() {
    let  playerLocations;
    let computerLocations;

    const setPlayerLocations = (boats) => playerLocations = new Set(getLocations(boats));
    const setComputerLocations = (boats) => computerLocations = new Set(getLocations(boats));
    
    const getPlayerLocations = () => playerLocations
    
    const getCompLocations = () => computerLocations;
    
    return {
        setPlayerLocations,
        setComputerLocations,
        getPlayerLocations,
        getCompLocations,
        playerLocations,
        computerLocations
    }
}

const getLocations = (boats) => {
    let array = [];
    boats.forEach(boat => {
        boat.coordinates.forEach(coordinate => {
            const num = coordinate.id.slice(1, 4);
            array.push(parseInt(num)); 
        })
    })
    return array;
}

export { Ship, makeShips, playerBoatLocations }