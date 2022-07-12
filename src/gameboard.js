import {generateBoard} from "./display.js"
import { Players } from "./player.js";
import { Ship } from "./ship.js"

const Gameboard = (playerBoat) => {
    const ComputerBoard = () => {   
        const setLocation = (boat, arr) => {
            const location = arr;
            location.forEach(node => {
                node.classList.add('boat')
            });
            return boat.shipLocation(location, playerBoat);
        }
        const makeBoard = () => generateBoard('computer-board');
        
        const receiveAttack = (hitSpot) => {
            spotsTaken(hitSpot).compSpotsTaken();
            let compMissedShots = [];
            let hitBoat;
            const boatHit = playerBoat.filter(boat => {
                boat.coordinates.forEach(num => {
                    const node = num.id.slice(1);
                    if(node === hitSpot) {
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
                compMissedShots.push(hitSpot);
                return compMissedShots;
                //record missed shot on board
            }
            const name = boatHit[0].boatName;
            const length = boatHit[0].length;
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
            location.forEach(node => {
                node.classList.add('boat')});
            return boat.shipLocation(location, playerBoat);
        }
        const makeBoard = () => {
            generateBoard('player-board');
        }
        const receiveAttack = (hitSpot) => {
            spotsTaken(hitSpot).playerSpotsTaken();
            let playerMissedShots = [];
            let hitBoat;
            const boatHit = playerBoat.filter(boat => {
                boat.coordinates.forEach(num => {
                    const node = num.id.slice(1);
                    if(parseInt(node) === hitSpot) {
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

            const name = boatHit[0].boatName;
            const length = boatHit[0].length;
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
    return {
        ComputerBoard,
        PlayerBoard,
    }
}

export {Gameboard};