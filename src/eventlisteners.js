import {ps} from './pubsub.js'
import {alterShipSection, computerDisplay} from './display.js'
    
function click (comp, player) {
    const compTiles = document.querySelectorAll('.comp-tile')
    const axis = document.querySelector('.axis')
    const c = computerDisplay();
    const a = alterShipSection();

    compTiles.forEach((tile) => tile.addEventListener('click', e => {
        const target = e.target.id;
        ps.publish('player-turn', target)
        c.preventClick()
        ps.publish('player-turn', target)
    }))
    axis.addEventListener('click', () => {
        a.changeAxis()
    })
}


export {click}

