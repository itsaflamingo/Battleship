import { makeShips } from "./ship";

const gameEnd = (player = 'player') => {
    console.log(`${player} wins!`);
    makeShips();
}

export {gameEnd};