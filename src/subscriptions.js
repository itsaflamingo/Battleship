import {Players} from './index.js'

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

ps.subscribe('player-turn', Players().playerTurn);

export {pubSub, ps}