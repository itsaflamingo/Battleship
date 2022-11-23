import { Gameboard } from './gameboard.js'
import { searchForBoat } from './searchForBoat'
import spotsAvailable  from './spotsAvailable'

function Players(compBoats = [], playerBoats = []) {
    let isPlayer = true;
    // Keeps track of all spots taken on player board when computer attacks
    const spotsTaken = new Set();
    // Track spots available on board. Can't, for ex. choose -1 or 101.
    const playerAvailableSpots = spotsAvailable();
    // Once hit, search for second hit to determine which direction boat is placed - horizontally or vertically. 
    const sb = searchForBoat();
    // Track player & computer boat locations to determine if boat is hit.
    let allPlayerLocations;
    let allCompLocations;
    // number that changes whenever clicked
    let num = 0;
    // used as pivot point when boat first hit. Changes when boat is hit again, and then each time after that. 
    let pivotNum = 0;
    // Used when boat hit in the center, gives point to go back to.
    let originalNum = 0;
    let isHit = false;
    let isSunk = false;
    let search = false;
    let boatHit;

    const Computer = () => {
        const getCompLocations = (obj) => allCompLocations = obj.pl.getCompLocations(obj.compBoats);

        const _randomNum = () => {
            num = Math.floor(Math.random() * (100-1) + 1);
            // If spot is already occupied, find another number
            if(spotsTaken.has(num)) return _randomNum();
            return num
        }

        const getAttackCoordinate = () => {
            return search ? _sendToSearch() : _sendToRandomNum();
        }
        const _sendToRandomNum = () => {
            num = _getRandomNum();
            // function returns true if boat is hit, false if not. 
            isHit = _checkIfBoatHit(num);
            // saves num in case we need to use it next round.
            if(isHit === true) {
                pivotNum = num;
                originalNum = num;
                search = true;
            }
            playerAvailableSpots.delete(num);
            return num;
        }
        const _isSunk = () => {
            playerBoats.forEach(boat => {
                boat.coordinates.forEach(id => {
                    const coordinate = id.id.slice(1, 4);
                    if(coordinate == num) {
                        boatHit = boat;
                    };
                })
            })

            if(boatHit.sunk === true) return true;
            return false;
        }

        const _sendToSearch = () => {
            isSunk = _isSunk();

            isSunk ? _reset() : startSearch();
            return num;
        }

        const _reset = () => {
            search = false;
            pivotNum = 0;
            num = _sendToRandomNum();
            sb.reset();
            isSunk = false;
            return;
        }

        const startSearch = () => {
            // if boat was hit previously but never sunk, change direction to check for another hit
            if(isHit === false && isSunk === false && search === true) {
                pivotNum = originalNum;
            }
            
            num = _getCalculatedNum(pivotNum);
            // if boat is hit, pivot number becomes new hit point. 
            isHit = _checkIfBoatHit(num);
            if(isHit === true) pivotNum = num;
            playerAvailableSpots.delete(num);
            
        }

        const _checkIfBoatHit = (num) => {
            if(allPlayerLocations.has(num)) {
                return true
            }

            return false;
        }

        const _getCalculatedNum = (pivotNum) => sb.ifVertical(pivotNum, originalNum, playerAvailableSpots)
        

        const _getRandomNum = () => {
            num = _randomNum();
            spotsTaken.add(num);
            return num;
        }

        const sendAttack = (num) => {
            Gameboard(playerBoats).PlayerBoard().receiveAttack(`p${num}`, isHit);
            return num;
        }
        
        isPlayer = true;
        return {
            sendAttack,
            getAttackCoordinate,
            getCompLocations
        }
    }

    const Player = () => {
        const playerAttack = (target) => Gameboard(compBoats).ComputerBoard().receiveAttack(target, allCompLocations);
        isPlayer = false;

        const getPlayerLocations = (obj) => allPlayerLocations = obj.pl.getPlayerLocations(obj.playerBoats);

        return {
            playerAttack,
            getPlayerLocations
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