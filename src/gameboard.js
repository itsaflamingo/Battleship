import {generateBoard} from "./display.js"
import { ps } from "./pubsub.js"
import { Ship } from './ship'

const Gameboard = (playerBoat = []) => {
    const ComputerBoard = () => {   
        const setLocation = (obj) => {
            let thisBoat = [];
            playerBoat.forEach(boat => {
                if(boat.boatName === obj.boat) {
                    boat.coordinates = obj.array;
                    thisBoat = Ship(boat.boatName, boat.length).shipLocation(boat.coordinates, playerBoat);
                }
            })
            return thisBoat;
        }
        const makeBoard = () => generateBoard('computer-board'); 
        
        const receiveAttack = (hitSpot, locations) => {
            const isHitBool = _hasBoatBeenHit(hitSpot, locations);

            isHitBool ? _boatIsHit(hitSpot) : _boatIsNotHit(hitSpot);
        }

        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }
    
    const PlayerBoard = () => {
        const setLocation = (obj) => {
            const length = parseInt(obj.num);
            const name = obj.name;
            const coordinates = obj.coordinates;
            let thisBoat;

            playerBoat.forEach(boat => {
                if(boat.boatName !== name) return;
                
                thisBoat = Ship(name, length)
                .shipLocation(coordinates, playerBoat);
            })
            return thisBoat;
        }

        const makeBoard = () => generateBoard('player-board'); 
        
        const receiveAttack = (hitSpot, locations) => {
            const isHitBool = _hasBoatBeenHit(hitSpot, locations);

            isHitBool ? _boatIsHit(hitSpot) : _boatIsNotHit(hitSpot);
        }
        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }

    const _hasBoatBeenHit = (id, locations) => {
        const num = id.slice(1, 4);

        if(locations.has(num)) {
            locations.delete(num);
            return true;
        }
        return false;
    }

    const _boatIsHit = (num) => {
        const boat = _findBoatHit(num); 
        _isHit(num, boat);
        const name = boat.boatName;
        const length = boat.length;
        //if hit, send hit coordinates to isHit
        return Ship(name, length).isHit(num, playerBoat);
    }

    const _boatIsNotHit = (num) => {
        _isNotHit(num);
        return undefined;
    }

    const _findBoatHit = (hitSpot) => {
        let boat;
        playerBoat.filter(ship => {
            const co = ship.coordinates.filter(coord => {
                    if(coord.id === (`${hitSpot}`)) {
                        boat = ship;
                        return coord;
                    }
                })
            return co;
        })
        return boat;
    };
    

    const _isHit = (spot, boat) => {
        ps.publish('hit-shot', { spot, boat, playerBoat });
    }

    const _isNotHit = (hitSpot) => ps.publish('missed-shot', hitSpot);

    return {
        ComputerBoard,
        PlayerBoard,
    }
}

export { Gameboard }