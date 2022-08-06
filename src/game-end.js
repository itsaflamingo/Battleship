import {ps} from './pubsub.js'

const gameEnd = (player = 'player') => {
    if(player[0].coordinates[0].id[0] === 'c') {
        player = 'Player'
    }
    else {
        player = 'Computer'
    }
    ps.publish('end-msg', player)
}

export {gameEnd};