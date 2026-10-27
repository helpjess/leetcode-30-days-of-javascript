/**
 * 2694. Event Emitter
 * https://leetcode.com/problems/event-emitter/
 *
 * Idea: map each event name to a list of callbacks. unsubscribe removes that one callback; emit calls them all in order and collects their return values.
 */

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) this.events.set(eventName, []);
        const listeners = this.events.get(eventName);
        listeners.push(callback);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) listeners.splice(index, 1);
            }
        };
    }

    emit(eventName, args = []) {
        const listeners = this.events.get(eventName) || [];
        return listeners.map((callback) => callback(...args));
    }
}
