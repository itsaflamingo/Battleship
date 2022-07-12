import {gameEnd} from './game-end.js'

//ship factory function. returns ship information, including if it has been sunk, where it was hit, and its location.
function Ship (name, length) { 

    const isHit = (hit, playerArr) => {
        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName)
        thisBoat[0].hitSpot.push(hit);
        return _isSunk(playerArr, thisBoat[0]);
    }
    const _isSunk = (playerArr, thisBoat) => {
        if(thisBoat.hitSpot.length === thisBoat.length) {
            let index = playerArr.indexOf(thisBoat);
            thisBoat.sunk = true;
            //remove element from boats
            playerArr.splice(index, 1);

            if(playerArr.length === 0) {
                gameEnd();
            }
        }
        return thisBoat;
    }
    const shipLocation = (location = [], playerArr = []) => {
        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName);
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
    let carrier = () => Ship('Carrier', 5);
    let battleship = () => Ship('Battleship', 4);
    let cruiser = () => Ship('Cruiser', 3);
    let submarine = () => Ship('Submarine', 3);
    let destroyer = () => Ship('Destroyer', 2);

    let computerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];
    let playerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];

    return {
        computerBoats, 
        playerBoats
    }
}

export {Ship, makeShips}