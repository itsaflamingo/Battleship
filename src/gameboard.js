import {generateBoard} from "./display.js"
import { Players } from "./player.js";
import { Ship } from "./ship.js"

const Gameboard = (playerBoat) => {
    const ComputerBoard = () => {   
        const setLocation = (boat, arr) => {
            const location = arr;
            return boat.shipLocation(location, playerBoat);
        }
        const makeBoard = () => generateBoard('computer-board');
        
        const receiveAttack = (hitSpot) => {
            spotsTaken(hitSpot).compSpotsTaken();
            let boat = _filterBoat(hitSpot); 
            const name = boat.boatName;
            const length = boat.length;
            if(boat.boatName === undefined) return boat;
            
            //send hit coordinates to isHit
            return Ship(name, length).isHit(hitSpot, playerBoat);
        }

        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }
    const PlayerBoard = () => {
        const setLocation = (boat, arr) => {
            const location = arr;
            return boat.shipLocation(location, playerBoat);
        }
        const makeBoard = () => {
            generateBoard('player-board');
        }
        const receiveAttack = (hitSpot) => {
            spotsTaken(hitSpot).playerSpotsTaken();
            let boat = _filterBoat(hitSpot) 
            const name = boat.boatName;
            const length = boat.length;
            if(boat.boatName === undefined) return boat;
            //send hit coordinates to isHit
            return Ship(name, length).isHit(hitSpot, playerBoat);
        }
        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }

    const spotsTaken = (spot) => {

        const playerSpotsTaken = () => {
            let playActiveSpots = [];
            playActiveSpots.push(spot);
            Players().Computer(playActiveSpots);
        }

        const compSpotsTaken = () => {
            let compActiveSpots = [];
            compActiveSpots.push(spot);
        }

        return {
            playerSpotsTaken,
            compSpotsTaken
        }
    }

    const _filterBoat = (hitSpot) => {
        let playerMissedShots = [];
        let hitBoat;
        const boatHit = playerBoat.filter(boat => {
            boat.coordinates.forEach(num => {
                if(num.id === hitSpot) {
                    hitBoat = boat;
                }
                else {
                    return;
                }
            })
            return hitBoat === boat;
        });
        
        if(boatHit.length === 0) {
            //record coordinates of missed shot
            playerMissedShots.push(hitSpot);
            return playerMissedShots;
            //record missed shot on board
        }

        return boatHit[0];

    }
    return {
        ComputerBoard,
        PlayerBoard,
    }
}

export {Gameboard};