import { Gameboard } from './gameboard.js'
import { searchForBoat } from './searchForBoat'
import spotsAvailable  from './spotsAvailable'

function Players(compBoats = [], playerBoats = []) {
    let isPlayer = true;
    // Keeps track of all spots taken on player board when computer attacks
    const spotsTaken = new Set();
    const playerAvailableSpots = spotsAvailable();
    const sb = searchForBoat();
    let allPlayerLocations;
    let allCompLocations;
    // number that changes whenever clicked
    let num = 0;
    // used as pivot point when boat first hit. Changes when boat is hit again, and then each time after that. 
    let pivotNum = 0;
    let isBoatHit = false;
    let isSunk = false;

    const Computer = () => {
        const getCompLocations = (obj) => allCompLocations = obj.pl.getCompLocations(obj.compBoats);

        const _randomNum = () => {
            num = Math.floor(Math.random() * (100-1) + 1);
            // If spot is already occupied, find another number
            if(spotsTaken.has(num)) return _randomNum();
            return num
        }

        const getAttackCoordinate = () => {
            if(isBoatHit === false) {
                num = _getRandomNum();
                // function returns true if boat is hit, false if not. 
                isBoatHit = _checkIfBoatHit(num);
                // saves num in case we need to use it next round.
                pivotNum = num;
            };
            num = _getCalculatedNum(pivotNum);
            const bool = _checkIfBoatHit(num);
            if(bool) pivotNum = num;
            return num;
        }

        const _checkIfBoatHit = (num) => {
            if(allPlayerLocations.has(num)) return true;
        }

        const _getCalculatedNum = (pivotNum) => sb.ifVertical(pivotNum, playerAvailableSpots)
        

        const _getRandomNum = () => {
            num = _randomNum();
            spotsTaken.add(num);
            return num;
        }

        const sendAttack = (num) => {
            return Gameboard(playerBoats).PlayerBoard().receiveAttack(`p${num}`, allPlayerLocations);
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