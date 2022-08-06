import './styles.css';
import {display, makeBoats, dragAndDrop, computerDisplay, displayShot, pushCoordinates, playAgain, winMsg} from './display.js';
import {Gameboard} from './gameboard.js';
import {ps} from './pubsub.js';
import {click} from './eventlisteners.js';
import {makeShips} from './ship.js';
import {Players} from './player.js';

display()

const gameLoop = () => {

    let computerBoats = makeShips().computerBoats;
    let playerBoats = makeShips().playerBoats;    

    const gbp = Gameboard(playerBoats).PlayerBoard();
    const gbc = Gameboard (computerBoats).ComputerBoard();

    const subscriptions = () => {
        const d = displayShot()
        const p = Players(computerBoats, playerBoats)

        ps.subscribe('player-turn', p.playerTurn)
        ps.subscribe('set-location', gbp.setLocation)
        ps.subscribe('comp-set-location', gbc.setLocation)
        ps.subscribe('set-player-ships', makeBoats().setPlayerShips)
        ps.subscribe('missed-shot', d.shotMissed)
        ps.subscribe('hit-shot', d.shotHit)
        ps.subscribe('push-coordinates', pushCoordinates)
        ps.subscribe('end-msg', winMsg)
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

    const eventListeners = () => {
        const playAgainBtn = document.querySelector('#play-again')
        playAgainBtn.addEventListener('click', () => {
            let p = playAgain()
            p.removeMain()
            p.newMain()
            p.rmEventListeners()
            const gl = gameLoop()
            gl.subscriptions()
            gl.makeBoards()
            gl.setBoats()

        })
    }

    return {
        subscriptions, 
        setBoats,
        makeBoards,
        eventListeners
    }

}

const gl = gameLoop()
gl.subscriptions()
gl.makeBoards()
gl.setBoats()
gl.eventListeners()

export {gameLoop}


