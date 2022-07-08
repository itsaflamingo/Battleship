import {computerBoats, playerBoats, Ships} from "./index.js";

const Gameboard = () => {
    const ComputerBoard = () => {
        const setLocation = (boat, ...arr) => {
            const location = arr;
            return boat.shipLocation(location, computerBoats);
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
        }
    }
    const PlayerBoard = () => {
        const setLocation = (boat, ...arr) => {
            const location = arr;
            return boat.shipLocation(location, playerBoats);
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
        }
    }
    const generateBoard = (board) => {
        const thisBoard = document.querySelector(`.${board}`);
    
        for(let i=1; i<=100; i++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'tile');
            let a = '';
            if(board === 'player-board') a='p';
            else a='c';

            div.setAttribute('id', `${a}${i}`);
            thisBoard.appendChild(div);
        }
    }
    return {
        ComputerBoard,
        PlayerBoard,
        generateBoard
    }
}

Gameboard().generateBoard('computer-board');
Gameboard().generateBoard('player-board');

const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => tile.addEventListener('click', (e) => {
    const target = (e.target.id).slice(1);
    ps.publish('player-turn', target);
}));

console.log('game');

export {Gameboard, tiles};