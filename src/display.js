const generateBoard = (board) => {
    const thisBoard = document.querySelector(`.${board}`);

    for(let i=1; i<=100; i++) {
        const div = document.createElement('div');
        div.classList.add('draggable');
        let a = '';
        if(board === 'player-board'){
            div.classList.add('player-tile');
            a='p'
        }
        else {
            div.classList.add('comp-tile');
            a='c'
        };

        div.setAttribute('id', `${a}${i}`);
        thisBoard.appendChild(div);
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

        const playerSection = document.createElement('div');
        playerSection.setAttribute('class', 'player-section');
        const playerBoard = document.createElement('div');
        playerBoard.setAttribute('class', 'player-board');


        const computerSection = document.createElement('div');
        computerSection.setAttribute('class', 'computer-section');
        const computerBoard = document.createElement('div');
        computerBoard.setAttribute('class', 'computer-board');

        const moveBtn = document.createElement('button');
        moveBtn.setAttribute('id', 'move-btn');
        moveBtn.innerHTML = 'MOVE SHIP'

        header.appendChild(title);
        header.appendChild(moveBtn);
        playerSection.appendChild(playerBoard);
        computerSection.appendChild(computerBoard);

        main.appendChild(playerSection);
        main.appendChild(computerSection);

        container.appendChild(header);
        container.appendChild(main);

        body.appendChild(container);
}
const makeBoats = (boat, array) => {
    array.forEach(node => {
        node.classList.add('boat');
        node.classList.add(boat);
        node.setAttribute('draggable', 'true');
    });
}

const dragAndDrop = () => {
    const draggables = document.querySelectorAll('.draggable');
    const playerBoard = document.querySelector('.player-board');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })
    })

    playerBoard.addEventListener('dragover', e => {
        //removes default state of not being able to drop
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const target = e.target;
        if(target === null) {
            return;
        }
        else {
            playerBoard.insertBefore(draggable, target);
        }
    })
}

export {display, generateBoard, makeBoats, dragAndDrop};