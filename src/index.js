import './styles.css';
import {display, makeBoats, dragAndDrop, computerDisplay, displayShot, pushCoordinates, playAgain, winMsg, shipSunkMsg, boatSunkMsg} from './display.js';
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
        const s = shipSunkMsg()

        const sub = () => {
            ps.subscribe('player-turn', p.playerTurn)
            ps.subscribe('set-location', gbp.setLocation)
            ps.subscribe('comp-set-location', gbc.setLocation)
            ps.subscribe('set-player-ships', makeBoats().setPlayerShips)
            ps.subscribe('missed-shot', d.shotMissed)
            ps.subscribe('hit-shot', d.shotHit)
            ps.subscribe('push-coordinates', pushCoordinates)
            ps.subscribe('end-msg', winMsg)
            ps.subscribe('boat-sunk-msg', s.selectPlayer)
            ps.subscribe('player-ship-sunk', s.playerSunkShip)
            ps.subscribe('comp-ship-sunk', s.compSunkShip)
        }
        

        const unsub = () => {
            ps.subscribe('player-turn', p.playerTurn).unsubscribe()
            ps.subscribe('set-location', gbp.setLocation).unsubscribe()
            ps.subscribe('comp-set-location', gbc.setLocation).unsubscribe()
            ps.subscribe('set-player-ships', makeBoats().setPlayerShips).unsubscribe()
            ps.subscribe('missed-shot', d.shotMissed).unsubscribe()
            ps.subscribe('hit-shot', d.shotHit).unsubscribe()
            ps.subscribe('push-coordinates', pushCoordinates).unsubscribe()
            ps.subscribe('end-msg', winMsg).unsubscribe()
            ps.subscribe('boat-sunk-msg', s.selectPlayer).unsubscribe()
            ps.subscribe('player-ship-sunk', s.playerSunkShip).unsubscribe()
            ps.subscribe('comp-ship-sunk', s.compSunkShip).unsubscribe()
        }
        return {
            sub,
            unsub
        }
    }
    
    const makeBoards = () => {
        gbp.makeBoard()
        gbc.makeBoard()
    }

    const setClick = () => {
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
            gl.subscriptions().unsub()
            gl.makeBoards()
            gl.setClick()
            gl.setBoats()

        })
    }

    return {
        subscriptions, 
        setBoats,
        makeBoards,
        setClick,
        eventListeners
    }

}

const gl = gameLoop()
gl.subscriptions().sub()
gl.makeBoards()
gl.setClick()
gl.setBoats()
gl.eventListeners()

export {gameLoop}


