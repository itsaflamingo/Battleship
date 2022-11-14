import { ps } from "./pubsub"
import {toggleTurn, changeAxis} from './eventlisteners.js'

const generateBoard = (board) => {
    const thisBoard = document.querySelector(`.${board}`)

    for(let i=1; i<=100; i++) {
        const div = document.createElement('div')
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
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        const header = document.createElement('div');
        header.setAttribute('class', 'header');
        const main = document.createElement('div');
        main.setAttribute('class', 'main');

        const title = document.createElement('h1');
        title.innerHTML = 'BATTLESHIP';

        const playAgain = document.createElement('button');
        playAgain.setAttribute('id', 'play-again');
        playAgain.innerHTML = 'Play Again';

        const dispMessage = document.createElement('div');
        dispMessage.setAttribute('id', 'msg');

        const playerSection = document.createElement('div');
        playerSection.setAttribute('class', 'player-section');
        const playerBoard = document.createElement('div');
        playerBoard.setAttribute('class', 'player-board');


        const computerSection = document.createElement('div');
        computerSection.setAttribute('class', 'computer-section');
        const computerBoard = document.createElement('div');
        computerBoard.setAttribute('class', 'computer-board');
        
        const shipSection = document.createElement('div');
        shipSection.setAttribute('class', 'ship-section');

        const ships = document.createElement('div');
        ships.setAttribute('class', 'ships');

        const carrier = document.createElement('div');
        carrier.setAttribute('class', 'ship');
        carrier.setAttribute('id', 'carrier');
        carrier.setAttribute('draggable', 'true');

        _addBoats(5, carrier, 'carrier');

        const battleship = document.createElement('div');
        battleship.setAttribute('class', 'ship');
        battleship.setAttribute('id', 'battleship');
        battleship.setAttribute('draggable', 'true');

        _addBoats(4, battleship, 'battleship');
        
        const cruiser = document.createElement('div');
        cruiser.setAttribute('class', 'ship');
        cruiser.setAttribute('id', 'cruiser');
        cruiser.setAttribute('draggable', 'true');

        _addBoats(3, cruiser, 'cruiser');
    
        const submarine = document.createElement('div');
        submarine.setAttribute('class', 'ship');
        submarine.setAttribute('id', 'submarine');
        submarine.setAttribute('draggable', 'true');

        _addBoats(3, submarine, 'submarine');

        const destroyer = document.createElement('div');
        destroyer.setAttribute('class', 'ship');
        destroyer.setAttribute('id', 'destroyer');
        destroyer.setAttribute('draggable', 'true');

        _addBoats(2, destroyer, 'destroyer')

        const axis = document.createElement('button');
        axis.setAttribute('class', 'axis');
        axis.innerHTML = 'X';

        ships.appendChild(carrier);
        ships.appendChild(battleship);
        ships.appendChild(cruiser);
        ships.appendChild(submarine);
        ships.appendChild(destroyer);
        shipSection.appendChild(ships);
        shipSection.appendChild(axis);
       

        header.appendChild(title);
        header.appendChild(playAgain);
        header.appendChild(dispMessage);
        playerSection.appendChild(playerBoard);
        computerSection.appendChild(computerBoard);

        main.appendChild(playerSection);
        main.appendChild(computerSection);

        container.appendChild(header);
        container.appendChild(main);
        container.appendChild(shipSection);

        body.appendChild(container);
}

const _addBoats = (length, boat, name) => {
    for(let i = 0; i < length; i++) {
        const innerBoat = document.createElement('div');
        innerBoat.classList.add('draggable');
        innerBoat.classList.add(`${name}`);

        boat.appendChild(innerBoat);
    }
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
            if(spot.classList.length <= 3) {
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
    const playerBoard = document.querySelector('.player-board');
    const ships = document.querySelectorAll('.ship');
    const tiles = document.querySelectorAll('.player-tile');

    ships.forEach(ship => {
        ship.addEventListener('dragstart', (e) => handleDragStart(e));
        ship.addEventListener('dragend', (e) => handleDragEnd(e));
    })

    tiles.forEach( tile => tile.addEventListener('dragleave', e => handleDragLeave(e)))
    playerBoard.addEventListener('dragover', e => dragOverHandler(e));
    playerBoard.addEventListener('drop', (e) => dropHandler(e, playerBoard));
}

function checkVertical(boat) {
    if(boat.classList.contains('Y')) return true;
    return false;
}

function handleDragStart(e) {
    const target = e.target;
    const children = target.children;
    [...children].forEach(child => {
        child.classList.add('dragging');
        child.classList.add('placed');
    });
}

function handleDragLeave(e) {
    const dragging = document.querySelectorAll('.dragging');
    const target = e.target;
    const isVertical = checkVertical(dragging[0]);
    const length = dragging.length;
    const id = target.id.slice(1);

    target.style.opacity = '1'

    if(isVertical === false) {
        for(let i = 1; i < length; i++) {
            const selectNext = parseInt(id) + i;
            const nextDiv = document.querySelector(`#p${selectNext}`)
            nextDiv.style.opacity = '1';
        }
    }
    else if(isVertical === true) {
        for(let i = 1; i < length; i++) {
            const selectNext = parseInt(id) + (10*i);
            if(selectNext > 100) return;
            const nextDiv = document.querySelector(`#p${selectNext}`)
            nextDiv.style.opacity = '1';
        }
    }

}

function handleDragEnd(e) {
    e.preventDefault();
    const target = e.target;
    target.style.opacity='1';
}

function dragOverHandler(e) {
    //removes default state not allowing drops
    e.preventDefault();
    const dragging = document.querySelectorAll('.dragging');
    const target = e.target;
    const isVertical = checkVertical(dragging[0]);
    const id = target.id.slice(1);
    const length = dragging.length;

    target.style.opacity = '0.4';

    if(isVertical === false) {
        for(let i=1; i<length; i++) {
            if(isNaN(id)) return;
            const right = parseInt(id) + i;
            const highlight = document.querySelector(`#p${right}`);
            highlight.style.opacity = '0.4';
        }  
    }
    else if(isVertical === true) {
        for(let i=1; i<length; i++) {
            if(isNaN(id)) return;
            const bottom = parseInt(id) + (10 * i);
            if(bottom > 100) return;
            const highlight = document.querySelector(`#p${bottom}`);
            highlight.style.opacity = '0.4';
        }  
    }
}

const labelBoatEmpty = (boatName) => {
    const boatHolder = document.querySelector(`#${boatName}`)
    boatHolder.classList.add('empty');
}

function replaceChildren(e, board, vertical) {
    const dragging = document.querySelectorAll('.dragging');
    let target = e.target;
    const id = target.id.slice(1);
    const length = dragging.length;
    const coordinates = [];
    
    if(vertical === false) {
        for(let i=0; i<length; i++) {
            const child = dragging[i];
            child.classList.remove('dragging');
            child.setAttribute('id', target.id);
            coordinates.push({id: target.id});
            const nextSibling = target.nextSibling;
            board.replaceChild(child, target);
            target = nextSibling;
        }
    }
    else if(vertical === true) {
        for(let i=1; i<=length; i++) {
            const child = dragging[i-1];
            child.classList.remove('dragging');
            child.classList.remove('Y');
            child.setAttribute('id', target.id);
            coordinates.push({id: target.id});
            const nextNode = parseInt(id) + (10*i);
            const nextSibling = document.querySelector(`#p${nextNode}`);
            board.replaceChild(child, target);
            target = nextSibling;
        }
    }

    return coordinates;
}

function dropHandler(e, board) {
    e.preventDefault();
    const dragging = document.querySelectorAll('.dragging');
    const boat = dragging[0];
    const name = boat.classList[1]; 
    const isVertical = checkVertical(boat);
    
    const target = e.target;
    target.style.opacity = '1';

    const coordinates = replaceChildren(e, board, isVertical);
    labelBoatEmpty(name);

    // keep track of number of ships within ship storing div
    const emptyShips = document.querySelectorAll('.empty');
  
    const numId = boat.id;
    const num = numId.slice(1, 3);

    ps.publish('set-location', {
        name,
        num,
        isVertical,
        coordinates
    })

    if(emptyShips.length === 5) alterShipSection().isFinished();
}

const alterShipSection = () => {

    const changeAxis = () => {
        const ships = document.querySelectorAll('.ships > .ship')
        const button = document.querySelector('.axis')

        const flip = (ship) => {
            ship.classList.toggle('vertical');

            const children = ship.children;
            [...children].forEach(child => child.classList.toggle('Y'));
            
            if(ship.classList.contains('vertical')) {
                button.innerHTML = 'Y'
            }
            else {
                button.innerHTML = 'X'
            }
        }        

        ships.forEach(ship => flip(ship))
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
        console.log(spot);
        const target = document.querySelector(`#${spot}`);
        target.classList.add('miss');
    }
    const shotHit = (spot) => {
        const target = document.querySelector(`#${spot}`);
        target.classList.add('boom');
    }
    
    return {
        shotMissed,
        shotHit
    }
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

        playerSection.appendChild(playerBoard)
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
const shipSunkMsg = () => {
    const msg = document.querySelector('#msg')

    const selectPlayer = (location) => {
        const player = location.id
        const node = document.querySelector(`#${player}`);
        if(player.includes('p') === true) {
            ps.publish('player-ship-sunk', node.classList[1]);
        }
        else if(player.includes('c') === true) {
            ps.publish('comp-ship-sunk', node.classList[1]);
        }
    }

    const playerSunkShip = (ship) => {
        msg.innerHTML = `Your ${ship} has been sunk!`
    }
    const compSunkShip = (ship) => {
        msg.innerHTML = `You have sunk your opponent's ${ship}!`
    }

    return {
        selectPlayer,
        playerSunkShip,
        compSunkShip
    }
}

const winMsg = (player) => {
    const msg = document.querySelector('#msg')
    msg.innerHTML = `${player} Wins!`
}
export {display, generateBoard, makeBoats, dragAndDrop, computerDisplay, alterShipSection, displayShot, playAgain, shipSunkMsg, winMsg}