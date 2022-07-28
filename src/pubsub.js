function pubSub() {
    let subscribers = {};

    const publish = (eventName, data) => {
        if (!Array.isArray(subscribers[eventName])) {
            return;
          }
          subscribers[eventName].forEach((callback) => {
            console.log(callback(data));
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

export {ps}