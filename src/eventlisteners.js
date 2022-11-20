import { ps } from './pubsub.js'
import { alterShipSection } from './display.js'
    
function click () {
    const compTiles = document.querySelectorAll('.comp-tile');
    const axis = document.querySelector('.axis');
    const a = alterShipSection();

    compTiles.forEach((tile) => tile.addEventListener('click', e => toggleTurn(e)));
    axis.addEventListener('click', () => changeAxis(a));
}

const toggleTurn = (e) => { 
    const target = e.target.id
    ps.publish('player-turn', target);
    ps.publish('player-turn', target);
}

const changeAxis = (a) => a.changeAxis();



export { click, toggleTurn, changeAxis }

