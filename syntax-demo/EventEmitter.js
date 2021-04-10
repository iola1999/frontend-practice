class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }

  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }

  once(eventName, fn) {
    // 即生成一个函数，代替调用on+off
    const tempFn = (...args) => {
      fn(...args);
      this.off(eventName, tempFn);
    };
    this.on(eventName, tempFn);
  }

  emit(eventName, ...args) {
    const callbackQueue = this.events[eventName] || [];
    callbackQueue.forEach(cb => {
      cb(...args);
    });
  }

  off(eventName, fn) {
    if (fn) {
      this.events[eventName] = this.events[eventName].filter(fnItem => fnItem !== fn);
    } else {
      // 不传第二个参数的话，会清空所有的注册
      this.events[eventName] = [];
    }
  }
}

let eventBus = new EventEmitter();
