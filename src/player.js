import { Gameboard, ifBoatIsHit, searchForBoat } from './gameboard.js'
import { makeShips } from './ship'

function Players(compBoats = [], playerBoats = []) {
    let isPlayer = true;
    const playerActiveSpots = new Set();
    let boatCoordinate = 0;
    let num = 0;
    let bool = false;
    let s = searchForBoat();
    let isSunk = false;
    const allCoordinates = makeShips().allLocations();

    const Computer = () => {
        const randomNum = () => {
            num = Math.floor(Math.random() * (100-1) + 1)
            if(playerActiveSpots.has(num)) {
                return randomNum()
            }
            return num
        }
        const _sendToSearch = (num) => {
            let obj = s.ifVertical(num)
            if(playerActiveSpots.has(obj.newNum)) {
                obj = s.ifVertical(num)
            }
            num = obj.newNum
            return num
        }
        const _nextNum = (num) => s.ifVertical(num)

        const _checkIfSunk = (boatName) => {
            let ship = {}
            playerBoats.forEach(boat => {
                if(boat.boatName === boatName) {
                    ship = boat
                }
            })
            if(ship === {}) ship.sunk = false
            return ship.sunk
        }
        const _whenSunk = () => {
            //reset all variables in function
            s = searchForBoat();
            s.reset();
            isSunk = false;
            boatCoordinate = 0;
            return randomNum()
        }
        const _checkIfHit = (num) => {
            //returns object
            bool = ifBoatIsHit().isHit(num, playerBoats);
            // if num is a hit and has not already been hit
            if(bool !== undefined && !playerActiveSpots.has(num)) {
                // 
                boatCoordinate = _nextNum(num).newNum;
                return boatCoordinate;
            }
            else {
                return num;
            }
        }
        const _returnNum = () => {
            // num refers to num declared in parent function
            if(boatCoordinate === 0 || isSunk === true) {
                num = randomNum();
            }
            // else check if boat is sunk, update isSunk, then either go back to search for new coordinate to hit ship, or reset all values depending on whether ship is sunk
            else {
            // bool declared in parent function
                isSunk = _checkIfSunk(bool);
                if(isSunk === true) {
                    num = _whenSunk();
                    return _checkIfHit(num);
                }
                return _sendToSearch(num);
            }

            return _checkIfHit(num);
        }
        const getAttackCoordinate = () => {
            const num = _returnNum();
            playerActiveSpots.add(num);
            return num;
        }
        const sendAttack = (num) => Gameboard(playerBoats).PlayerBoard().receiveAttack(`p${num}`)
        
        isPlayer = true
        return {
            randomNum,
            sendAttack,
            getAttackCoordinate,
        }
    }
    const Player = () => {
        const playerAttack = (target) => {
            return Gameboard(compBoats).ComputerBoard().receiveAttack(target)
        }
        isPlayer = false;
        return {
            playerAttack
        }
    }
    const playerTurn = (target) => {
        return isPlayer ? Player().playerAttack(target) : Computer().sendAttack(Computer().getAttackCoordinate()) 
    }
    return {
        Computer,
        Player,
        playerTurn
    }
}

export {Players}