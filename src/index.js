import './styles.css';
import {display, makeBoats, dragAndDrop, computerDisplay, displayShot, pushCoordinates} from './display.js';
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
        const d = displayShot()

        ps.subscribe('player-turn', Players(computerBoats, playerBoats).playerTurn)
        ps.subscribe('set-location', gbp.setLocation)
        ps.subscribe('comp-set-location', gbc.setLocation)
        ps.subscribe('set-player-ships', makeBoats().setPlayerShips)
        ps.subscribe('missed-shot', d.shotMissed)
        ps.subscribe('hit-shot', d.shotHit)
        ps.subscribe('push-coordinates', pushCoordinates)
    }
    
    const makeBoards = () => {
        gbp.makeBoard()
        gbc.makeBoard()

        click(computerBoats, playerBoats)
    }

    const setBoats = () => {
        const c = computerDisplay()
        const m = makeBoats()
        c.toggleClick()

        m.setComputerShips('carrier', c.randomNumGenerator(5))
        m.setComputerShips('battleship', c.randomNumGenerator(4))
        m.setComputerShips('cruiser', c.randomNumGenerator(3))
        m.setComputerShips('submarine', c.randomNumGenerator(3))
        m.setComputerShips('destroyer', c.randomNumGenerator(2))

        dragAndDrop()
    }

    return {
        subscriptions, 
        setBoats,
        makeBoards,
    }

}

let gl = gameLoop();
gl.subscriptions();
gl.makeBoards();
gl.setBoats();



