import './styles.css';
import {display, makeBoats, dragAndDrop, computerDisplay} from './display.js';
import {Gameboard} from './gameboard.js';
import {ps} from './pubsub.js';
import {click} from './eventlisteners.js';
import {makeShips} from './ship.js';
import {Players} from './player.js';

display();

const gameLoop = () => {

    let computerBoats = makeShips().computerBoats;
    let playerBoats = makeShips().playerBoats;    

    const gbp = Gameboard(playerBoats).PlayerBoard();
    const gbc = Gameboard (computerBoats).ComputerBoard();

    const subscriptions = () => {
        ps.subscribe('player-turn', Players(computerBoats, playerBoats).playerTurn);
    }
    
    const makeBoards = () => {
        gbp.makeBoard();
        gbc.makeBoard();

        click(computerBoats, playerBoats);
    }

    const setBoats = () => {
        const c = computerDisplay();

        makeBoats('carrier', c.randomCompDisp(5));
        makeBoats('battleship', c.randomCompDisp(4));
        makeBoats('cruiser', c.randomCompDisp(3));
        makeBoats('submarine', c.randomCompDisp(3));
        makeBoats('destroyer', c.randomCompDisp(2));

        dragAndDrop();
    }

    return {
        subscriptions, 
        setBoats,
        makeBoards
    }

}


let gl = gameLoop();
gl.subscriptions();
gl.makeBoards();
gl.setBoats();



