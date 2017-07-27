
class Events {

  constructor() {
    this.index = 0;
    this.events = {};

    this.on = this.on.bind(this);
    this.remove = this.remove.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.cleanAll = this.cleanAll.bind(this);
  }

  on(eventId, callback, callee) {
    if(!this.events[eventId]) {
      this.events[eventId] = [];
    }

    this.index++;

    const listener = {
      callback: callback,
      callee: callee,
      id: this.index
    };

    this.events[eventId].push(listener);
    return this.index;
  }

  remove(eventId, listenerId) {
    if(!this.events[eventId]) return;
    if(!listenerId) return;

    this.events[eventId] = this.events[eventId].filter(listener => listener.id !== listenerId);
  }

  cleanAll() {
    this.events = {};
  }

  dispatch(eventId, data) {
    if(!this.events[eventId]) return;

    for(let listener of this.events[eventId]) {
      listener.callback(data, eventId, listener.id, listener.callee);
    }
  }
}

let events = new Events();

export default events;
