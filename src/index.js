import {pubSub, ps} from './subscriptions.js';
import {Gameboard, tiles} from './gameboard.js'

function Players() {
    let isPlayer = true;
    const Computer = () => {
        const _randomNum = () => {
            let num = Math.floor(Math.random() * (100-1) + 1);
            if(occupiedSpots.indexOf(num) !== -1) {
                _randomNum();
            }
            return num;
        };
        const compAttack = () => {
            console.log('computer');
            return Gameboard().PlayerBoard().receiveAttack(_randomNum())
        };
        isPlayer = true;
        return {
            compAttack
        }
    }

    const Player = () => {
        const playerAttack = (target) => {
            console.log('player', target);
            return Gameboard().ComputerBoard().receiveAttack(target);
        };
        isPlayer = false;
        return {
            playerAttack
        }
    }

    const playerTurn = (target) => {
        return (isPlayer ? Player().playerAttack(target) : Computer().compAttack()); 
    }
    return {
        Computer,
        Player,
        playerTurn
    }
}

function Ship (name, length) { 
    const isHit = (hit, playerArr) => {
        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName)
        thisBoat[0].hitSpot.push(hit);
        occupiedSpots.push(hit);
        console.log(thisBoat[0]);
        return _isSunk(boat.hitSpot,playerArr, thisBoat[0]);
    }
    const _isSunk = (hit, playerArr, thisBoat) => {
        if(hit.length === thisBoat.length) {
            thisBoat.sunk = true;
            //remove element from boats
            playerArr.splice(index, 1);
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
let carrier = ()=> Ship('Carrier', 5);
let battleship = ()=> Ship('Battleship', 4);
let cruiser = ()=> Ship('Cruiser', 3);
let submarine = ()=>Ship('Submarine', 3);
let destroyer = ()=>Ship('Destroyer', 2);

let occupiedSpots = [];

// with that, you could:
let computerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];
let playerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];


console.log(Ship('Carrier', 5).shipLocation([p1, p2, p3, p4, p5], playerBoats));
console.log(Ship('Carrier', 5).shipLocation([c1, c2, c3, c4, c5], computerBoats));


export {Ship, Players, carrier, playerBoats, computerBoats};

