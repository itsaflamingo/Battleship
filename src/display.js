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

        const playerSection = document.createElement('div')
        playerSection.setAttribute('class', 'player-section')
        const playerBoard = document.createElement('div')
        playerBoard.setAttribute('class', 'player-board')


        const computerSection = document.createElement('div')
        computerSection.setAttribute('class', 'computer-section')
        const computerBoard = document.createElement('div')
        computerBoard.setAttribute('class', 'computer-board')

        const moveBtn = document.createElement('button')
        moveBtn.setAttribute('id', 'move-btn')
        moveBtn.innerHTML = 'MOVE SHIP'
        
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
        header.appendChild(moveBtn)
        playerSection.appendChild(playerBoard)
        playerSection.appendChild(shipSection)
        computerSection.appendChild(computerBoard)

        main.appendChild(playerSection)
        main.appendChild(computerSection)

        container.appendChild(header)
        container.appendChild(main)

        body.appendChild(container)
}
const makeBoats = (boat, array) => {
    array.forEach(node => {
            node.classList.add('boat')
            node.classList.add('draggable')
            node.setAttribute('draggable', 'true')
        node.classList.add(boat)
    })
}
const computerDisplay = () => {
    const compBoard = document.querySelector('.computer-board')

    const randomCompDisp = (length) => {
        let array = []
        const randomNum = Math.floor(Math.random() * (100-1) + 1)

        for(let i=randomNum; i<randomNum+length; i++) {
            const node = document.getElementById(`c${i}`)
            const nodeId = node.id
            let endRow = parseInt(nodeId.slice(1, 2))
            if(nodeId.length > 2) {
                endRow = (endRow+1)*10
            }
            //if space is occupied by boat
            if(node.classList.length > 2) {
                return randomCompDisp(length)
            }
            //if boat will overlap
            if(array.length === 0 && ((randomNum + length) > endRow  || randomNum % 10 === 0)) {
                return randomCompDisp(length)
            }

            array.push(node)
        }
        return array
    }
    const preventClick = () => {
        compBoard.classList.add('no-click');
    }

    return {
        randomCompDisp,
        preventClick
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
        draggable.addEventListener('dragend', (e) => {
            //remove dragging class from entire boat
            draggable.classList.remove('dragging')
            playerBoard.replaceChild(draggable, e.target.nextSibling)
        })
    })

    playerBoard.addEventListener('dragover', e => {
        //removes default state of not being able to drop
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        const target = e.target

        if(target === null) return
        
        draggable.setAttribute('id', target.id)
        playerBoard.insertBefore(draggable, target)
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

        if(ships.length === 0) _isFinished()
    }

    const _isFinished = () => {
        const shipSection = document.querySelector('.ship-section')
        computerDisplay().preventClick()
        shipSection.classList.add('.hide')
    }
    
    return {
        changeAxis
    }
    
}

export {display, generateBoard, makeBoats, dragAndDrop, computerDisplay, alterShipSection}