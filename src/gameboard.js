import {generateBoard} from "./display.js"
import { Ship, ships, computerBoats, playerBoats } from "./ship.js"

const Gameboard = () => {
    // const computerBoats = compBoats;
    // const playerBoats = plrBoats;
    const ComputerBoard = () => {
        const setLocation = (boat, ...arr) => {
            const location = arr;
            return boat.shipLocation(location, computerBoats);
        }
        const makeBoard = () => {
            generateBoard('computer-board');
        }
        const receiveAttack = (hitSpot) => {
            let compMissedShots = [];
            let hitBoat;
            const boatHit = computerBoats.filter(boat => {
                boat.coordinates.forEach(node => {
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
            return Ship(name, length).isHit(hitSpot, computerBoats);
        }

        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }
    const PlayerBoard = () => {
        const setLocation = (boat, ...arr) => {
            const location = arr;
            return boat.shipLocation(location, playerBoats);
        }
        const makeBoard = () => {
            generateBoard('player-board');
        }
        const receiveAttack = (hitSpot) => {
            let playerMissedShots = [];
            let hitBoat;
            const boatHit = playerBoats.filter(boat => {
                boat.coordinates.forEach(num => {
                    if(num === hitSpot) {
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

            //send hit coordinates to isHit
            return boatHit[0].isHit(hitSpot, playerBoats);
        }
        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }
    return {
        ComputerBoard,
        PlayerBoard,
    }
}

export {Gameboard};