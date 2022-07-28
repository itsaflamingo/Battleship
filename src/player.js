import {Gameboard} from './gameboard.js'

function Players(compBoats = [], playerBoats = []) {
    let isPlayer = true;
    const Computer = () => {
        const randomNum = () => {
            let num = Math.floor(Math.random() * (100-1) + 1)
            const playerActiveSpots = Gameboard().spotsTaken().playActiveSpots
            if(playerActiveSpots.indexOf(num) !== -1) {
                randomNum();
            }
            return num;
        }
        const compAttack = (num) => {
            return Gameboard(playerBoats).PlayerBoard().receiveAttack(`p${num}`)
            //if above returns array, not just a number, then call hitAgain() function
        }
        isPlayer = true;
        return {
            compAttack,
            randomNum
        }
    }
    const Player = () => {
        const playerAttack = (target) => {
            return Gameboard(compBoats).ComputerBoard().receiveAttack(target);
        }
        isPlayer = false;
        return {
            playerAttack
        }
    }
    const playerTurn = (target) => {
        return isPlayer ? Player().playerAttack(target) : Computer().compAttack(Computer().randomNum()); 
    }
    return {
        Computer,
        Player,
        playerTurn
    }
}

export {Players}