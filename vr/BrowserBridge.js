import lodash from 'lodash'; 

export default class BrowserBridge {
    constructor() {
        this._subscribers = {};
    }

    subscribe(handler) {
        const key = String(Math.random());
        this._subscribers[key] = handler;
        return () => {
            delete this._subscribers[key];
        };
    }

    notifyEvent(name, event) {
        lodash.forEach(this._subscribers, handler => {
            handler(name, event);
        });
    }
}