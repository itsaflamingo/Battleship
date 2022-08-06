import { ps } from "./pubsub"
import {toggleTurn, changeAxis} from './eventlisteners.js'

const generateBoard = (board) => {
    const thisBoard = document.querySelector(`.${board}`)

    for(let i=1; i<=100; i++) {
        const div = document.createElement('div')
        div.classList.add('draggable')
        let a = ''
        if(board === 'player-board'){
            div.classList.add('player-tile')
            a='p'
        }
        else {
            div.classList.add('comp-tile')
            a='c'
        }

        div.setAttribute('id', `${a}${i}`)
        thisBoard.appendChild(div)
    }
}
function display() {
        const body = document.querySelector('body')
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        const header = document.createElement('div')
        header.setAttribute('class', 'header')
        const main = document.createElement('div')
        main.setAttribute('class', 'main')

        const title = document.createElement('h1')
        title.innerHTML = 'BATTLESHIP'

        const playAgain = document.createElement('button')
        playAgain.setAttribute('id', 'play-again')
        playAgain.innerHTML = 'Play Again'

        const dispMessage = document.createElement('div')
        dispMessage.setAttribute('id', 'msg')

        const playerSection = document.createElement('div')
        playerSection.setAttribute('class', 'player-section')
        const playerBoard = document.createElement('div')
        playerBoard.setAttribute('class', 'player-board')


        const computerSection = document.createElement('div')
        computerSection.setAttribute('class', 'computer-section')
        const computerBoard = document.createElement('div')
        computerBoard.setAttribute('class', 'computer-board')
        
        const shipSection = document.createElement('div')
        shipSection.setAttribute('class', 'ship-section')

        const ships = document.createElement('div')
        ships.setAttribute('class', 'ships')

        const carrier = document.createElement('div')
        carrier.setAttribute('class', 'ship')
        carrier.classList.add('draggable')
        carrier.classList.add('carrier')
        carrier.setAttribute('draggable', 'true')

        const battleship = document.createElement('div')
        battleship.setAttribute('class', 'ship') 
        battleship.classList.add('draggable')
        battleship.classList.add('battleship')
        battleship.setAttribute('draggable', 'true')
        
        const cruiser = document.createElement('div')
        cruiser.setAttribute('class', 'ship')
        cruiser.classList.add('draggable')
        cruiser.classList.add('cruiser')
        cruiser.setAttribute('draggable', 'true')

        const submarine = document.createElement('div')
        submarine.setAttribute('class', 'ship')
        submarine.classList.add('draggable')
        submarine.classList.add('submarine')
        submarine.setAttribute('draggable', 'true')

        const destroyer = document.createElement('div')
        destroyer.setAttribute('class', 'ship')
        destroyer.classList.add('draggable')
        destroyer.classList.add('destroyer')
        destroyer.setAttribute('draggable', 'true')

        const axis = document.createElement('button');
        axis.setAttribute('class', 'axis')
        axis.innerHTML = 'X'

        ships.appendChild(carrier)
        ships.appendChild(battleship)
        ships.appendChild(cruiser)
        ships.appendChild(submarine)
        ships.appendChild(destroyer)
        shipSection.appendChild(ships)
        shipSection.appendChild(axis)
       

        header.appendChild(title)
        header.appendChild(playAgain)
        header.appendChild(dispMessage)
        playerSection.appendChild(playerBoard)
        playerSection.appendChild(shipSection)
        computerSection.appendChild(computerBoard)

        main.appendChild(playerSection)
        main.appendChild(computerSection)

        container.appendChild(header)
        container.appendChild(main)

        body.appendChild(container)
}
const makeBoats = () => {
    
    const setComputerShips = (boat, array) => {
            array.forEach(node => {
                node.classList.add('boat')
                node.classList.add('draggable')
                node.setAttribute('draggable', 'true')
            node.classList.add(boat)
        })
        ps.publish('comp-set-location', {
            boat,
            array 
        })
    }

    const setPlayerShips = (boat) => {
        boat.coordinates.forEach(spot => {
            if(spot.classList.length <= 2) {
                spot.classList.add(boat.boatName)
                spot.classList.add('player-tile')
            }
        })
    }
    return {
        setComputerShips,
        setPlayerShips
    }
}
const computerDisplay = () => {
    const compBoard = document.querySelector('.computer-board')

    const randomNumGenerator = (length) => {
        let randomNum = Math.floor(Math.random() * (100-1) + 1)
        const isVertical = Math.random()
        const r = randomCompDisp(length)
        let arr = []
        if(isVertical > 0.5) {
            arr = r.mkVertical(randomNum)
        }
        else {
            arr = r.mkHorizontal(randomNum)
        }

        return arr
    }

    const randomCompDisp = (length) => {
        let array = []

        const mkVertical = (num) => {
            const firstNum = Number(String(num)[0])
            let endCol = firstNum + 90

            for(let i=num; i<num+(length*10); i+=10) {
                const node = document.getElementById(`c${i}`)
                //if space is occupied by boat
                if(node.classList.length > 2) {
                    return randomNumGenerator(length)
                }
                
                if(num.length > 2) {
                    const secondNum = Number(String(num)[1])
                    endCol = secondNum + 90
                }
                const gap = endCol - num
                //if boat will overlap
                if(gap <= length * 10) {
                    return randomNumGenerator(length)
                }
                array.push(node)
            }
            return array
        }
        const mkHorizontal = (num) => {
            for(let i=num; i<num+length; i++) {
                const node = document.getElementById(`c${i}`)
                //if space is occupied by boat
                if(node.classList.length > 2) {
                    return randomNumGenerator(length)
                }
                const nodeId = node.id
                let endRow = parseInt(nodeId.slice(1, 2))
                if(nodeId.length > 2) {
                    endRow = (endRow+1)*10
                }
                //if boat will overlap
                if(array.length === 0 && ((num + length) > endRow  || num % 10 === 0)) {
                    return randomNumGenerator(length)
                }
                array.push(node)
            }
            return array
        }
        return {
            array,
            mkVertical,
            mkHorizontal
        }
    }

    const toggleClick = () => {
        compBoard.classList.toggle('no-click')
    }

    return {
        randomCompDisp,
        toggleClick,
        randomNumGenerator

    }
}
const dragAndDrop = () => {
    const draggables = document.querySelectorAll('.draggable')
    const playerBoard = document.querySelector('.player-board')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            //add dragging class to entire boat
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend', e => {
            //remove dragging class from entire boat
            draggable.classList.remove('dragging')
            const ships = document.querySelector('.ships').childElementCount
            const boat = e.target.classList[2]
            let isVertical = false
            if(draggable.classList.contains('vertical')) {
                isVertical = true
            }
            const numId = draggable.id
            const num = numId.slice(1, 3)
            ps.publish('set-location', {
                boat,
                num,
                isVertical,
            })
            draggable.remove()

            if(ships === 0) alterShipSection().isFinished()
        })
    })

    playerBoard.addEventListener('dragover', e => {
        //removes default state of not being able to drop
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        const target = e.target

        if(target === null) return
        
        draggable.setAttribute('id', target.previousSibling.id)
        playerBoard.insertBefore(draggable, target.previousSibling)
    })
}
const alterShipSection = () => {

    const changeAxis = () => {
        const ships = document.querySelectorAll('.ships > .ship')
        const button = document.querySelector('.axis')

        ships.forEach(ship => {
            ship.classList.toggle('vertical')
            if(ship.classList.contains('vertical')) {
                button.innerHTML = 'Y'
            }
            else {
                button.innerHTML = 'X'
            }
        })
    }

    const isFinished = () => {
        const shipSection = document.querySelector('.ship-section')
        computerDisplay().toggleClick()
        shipSection.style.display = 'none'
    }
    
    return {
        changeAxis,
        isFinished
    }
    
}
const displayShot = () => {
    const shotMissed = (spot) => {
        const target = document.querySelector(`#${spot}`)
        target.classList.add('miss')
    }
    const shotHit = (spot) => {
        const target = document.querySelector(`#${spot}`)
        target.classList.add('boom')
    }
    
    return {
        shotMissed,
        shotHit
    }
}
const pushCoordinates = (obj) => {
    const node = document.querySelector(`#p${obj.i}`)
    obj.boat.coordinates.push(node)
    node.classList.add('boat')
    node.classList.add(obj.boat.boatName)
}
const playAgain = () => {
    const main = document.querySelector('.main')

    const removeMain = () => {
        while (main.firstChild) {
            main.removeChild(main.lastChild);
        }
    }

    const newMain = () => {
        const playerSection = document.createElement('div')
        playerSection.setAttribute('class', 'player-section')
        const playerBoard = document.createElement('div')
        playerBoard.setAttribute('class', 'player-board')


        const computerSection = document.createElement('div')
        computerSection.setAttribute('class', 'computer-section')
        const computerBoard = document.createElement('div')
        computerBoard.setAttribute('class', 'computer-board')
        
        const shipSection = document.createElement('div')
        shipSection.setAttribute('class', 'ship-section')

        const ships = document.createElement('div')
        ships.setAttribute('class', 'ships')

        const carrier = document.createElement('div')
        carrier.setAttribute('class', 'ship')
        carrier.classList.add('draggable')
        carrier.classList.add('carrier')
        carrier.setAttribute('draggable', 'true')

        const battleship = document.createElement('div')
        battleship.setAttribute('class', 'ship') 
        battleship.classList.add('draggable')
        battleship.classList.add('battleship')
        battleship.setAttribute('draggable', 'true')
        
        const cruiser = document.createElement('div')
        cruiser.setAttribute('class', 'ship')
        cruiser.classList.add('draggable')
        cruiser.classList.add('cruiser')
        cruiser.setAttribute('draggable', 'true')

        const submarine = document.createElement('div')
        submarine.setAttribute('class', 'ship')
        submarine.classList.add('draggable')
        submarine.classList.add('submarine')
        submarine.setAttribute('draggable', 'true')

        const destroyer = document.createElement('div')
        destroyer.setAttribute('class', 'ship')
        destroyer.classList.add('draggable')
        destroyer.classList.add('destroyer')
        destroyer.setAttribute('draggable', 'true')

        const axis = document.createElement('button');
        axis.setAttribute('class', 'axis')
        axis.innerHTML = 'X'

        ships.appendChild(carrier)
        ships.appendChild(battleship)
        ships.appendChild(cruiser)
        ships.appendChild(submarine)
        ships.appendChild(destroyer)
        shipSection.appendChild(ships)
        shipSection.appendChild(axis)

        playerSection.appendChild(playerBoard)
        playerSection.appendChild(shipSection)
        computerSection.appendChild(computerBoard)

        main.appendChild(playerSection)
        main.appendChild(computerSection)
    }

    const rmEventListeners = () => {
        const compTiles = document.querySelectorAll('.comp-tile')
        const axis = document.querySelector('.axis')

        compTiles.forEach((tile) => tile.removeEventListener('click', toggleTurn))
        axis.removeEventListener('click', changeAxis)
    }
    
    return {
        removeMain,
        newMain,
        rmEventListeners
    }
}
const winMsg = (player) => {
    const msg = document.querySelector('#msg')
    msg.innerHTML = `${player} Wins!`
}

export {display, generateBoard, makeBoats, dragAndDrop, computerDisplay, alterShipSection, displayShot, pushCoordinates, playAgain, winMsg}