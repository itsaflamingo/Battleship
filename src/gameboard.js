import {generateBoard} from "./display.js"
import { Players } from "./player.js";
import { ps } from "./pubsub.js";
import { Ship } from "./ship.js"

const Gameboard = (playerBoat) => {
    const ComputerBoard = () => {   
        const setLocation = (obj) => {
            let thisBoat = []
            playerBoat.forEach(boat => {
                if(boat.boatName === obj.boat) {
                    boat.coordinates = obj.array
                    thisBoat = Ship(boat.boatName, boat.length).shipLocation(boat.coordinates, playerBoat)
                }
            })
            return thisBoat
        }
        const makeBoard = () => generateBoard('computer-board');
        
        const receiveAttack = (hitSpot) => {
            spotsTaken(hitSpot).compSpotsTaken();
            let boat = _filterBoat(hitSpot); 
            const name = boat.boatName;
            const length = boat.length;
            if(boat.boatName === undefined) return boat;
            
            //send hit coordinates to isHit
            return Ship(name, length).isHit(hitSpot, playerBoat)
        }

        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }
    
    const PlayerBoard = () => {
        const setLocation = (obj) => {
            let num = parseInt(obj.num)
            let thisBoat
            playerBoat.forEach(boat => {
                if(boat.boatName !== obj.boat) {
                    return
                }

                if(obj.isVertical === true) {
                    for(let i = num; i<num+(boat.length*10); i+=10) {
                        const node = document.querySelector(`#p${i}`)
                        boat.coordinates.push(node)
                    }
                }
                else {
                    for(let i = num; i<num+boat.length; i++) {
                        const node = document.querySelector(`#p${i}`)
                        boat.coordinates.push(node)
                    }
                }
                ps.publish('set-player-ships', boat)
                thisBoat = boat
            })
            return Ship(thisBoat.boatName, thisBoat.length).shipLocation(thisBoat.coordinates, playerBoat)
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
        })

        if(boatHit.length === 1) {
            ps.publish('hit-shot', hitSpot)
        }
        else if(boatHit.length === 0) {
            //record coordinates of missed shot
            playerMissedShots.push(hitSpot);
            ps.publish('missed-shot', hitSpot)
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