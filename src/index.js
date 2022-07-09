import './styles.css'
import {display} from './display.js'
import {Gameboard} from './gameboard.js'
import {Ship, playerBoats, computerBoats} from './ship.js'
import {Players} from './player.js'
import {tiles} from './eventlisteners.js'

display();

function pubSub() {
    let subscribers = {};

    const publish = (eventName, data) => {
        if (!Array.isArray(subscribers[eventName])) {
            return;
          }
          subscribers[eventName].forEach((callback) => {
            callback(data);
          })
    }
    const subscribe = (eventName, callback) => {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
            }
            subscribers[eventName].push(callback);
            const index = subscribers[eventName].length-1;
    
            return {
                unsubscribe() {
                    subscribers[eventName].splice(index, 1);
                }
            }
    }
    return {
        publish,
        subscribe,
    }
}
const ps = pubSub();
//TODO: move all outside code to a function and call from index
const gb = Gameboard();
const cb = gb.ComputerBoard();
const pb = gb.PlayerBoard();

cb.makeBoard();
pb.makeBoard();

ps.subscribe('player-turn', Players().playerTurn);

console.log(Ship('Carrier', 5).shipLocation([p1, p2, p3, p4, p5], playerBoats));
console.log(Ship('Carrier', 5).shipLocation([c1, c2, c3, c4, c5], computerBoats));

export {pubSub, ps}



