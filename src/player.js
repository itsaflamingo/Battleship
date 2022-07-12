import {Gameboard} from './gameboard.js'

function Players(compBoats = [], playerBoats = []) {
    let isPlayer = true;
    const Computer = (playerActiveSpots = []) => {
        const _randomNum = () => {
            let num = Math.floor(Math.random() * (100-1) + 1);
            if(playerActiveSpots.indexOf(num) !== -1) {
                _randomNum();
            }
            console.log(num);
            return num;
        };
        const compAttack = () => {
            return Gameboard(compBoats).PlayerBoard().receiveAttack(_randomNum());
        };
        isPlayer = true;
        return {
            compAttack
        }
    }
    const Player = () => {
        const playerAttack = (target) => {
            return Gameboard(playerBoats).ComputerBoard().receiveAttack(target);
        };
        isPlayer = false;
        return {
            playerAttack
        }
    }
    const playerTurn = (target) => {
        return (isPlayer ? Player().playerAttack(target) : Computer().compAttack()); 
    }
    return {
        Computer,
        Player,
        playerTurn
    }
}

export {Players}