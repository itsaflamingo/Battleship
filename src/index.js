import './styles.css';
import {display, addClassToLocation} from './display.js';
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

    const makeBoats = () => {


        console.log(gbp.setLocation(playerBoats[0], [p1, p2, p3, p4, p5]));
        console.log(gbc.setLocation(computerBoats[0], [c1, c2, c3, c4, c5]));
    
        console.log(gbp.setLocation(playerBoats[1], [p11, p21, p31, p41]))
        console.log(gbc.setLocation(computerBoats[1], [c11, c21, c31, c41]))
    
        console.log(gbp.setLocation(playerBoats[2], [p8, p9, p10]));
        console.log(gbc.setLocation(computerBoats[2], [c8, c9, c10]));
    
        console.log(gbp.setLocation(playerBoats[3], [p24, p25, p26]));
        console.log(gbc.setLocation(computerBoats[3], [c24, c25, c26]));
    
        console.log(gbp.setLocation(playerBoats[4], [p37, p47]));
        console.log(gbc.setLocation(computerBoats[4], [c37, c47]));

        addClassToLocation([p1, p2, p3, p4, p5]);
        addClassToLocation([c1, c2, c3, c4, c5]);
        addClassToLocation([p11, p21, p31, p41]);
        addClassToLocation([c11, c21, c31, c41]);
        addClassToLocation([p8, p9, p10]);
        addClassToLocation([c8, c9, c10]);
        addClassToLocation([p24, p25, p26]);
        addClassToLocation([c24, c25, c26]);
        addClassToLocation([p37, p47]);
        addClassToLocation([c37, c47]);

    }

    return {
        subscriptions, 
        makeBoats,
        makeBoards
    }

}


let gl = gameLoop();
gl.subscriptions();
gl.makeBoards();
gl.makeBoats();



