let PENDING = 'PENDING';
let RESOLVE = 'RESOLVE';
let REJECT = 'REJECT';

const isPromise = (x) => {
    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        if (typeof x.then === 'function') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const resolvePromise = (promise2, x, resolve, reject) => {
    // 判断promise2 和 x 是否相等，如果相等则会死循环
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    // 如果 x 是不为Null对象或者函数
    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        let called;  // promise2的调用限制，防止多次调用成功和失败
        // 去取值的then，可能会出错，使用try
        try {
            let then = x.then;
            if (typeof then === 'function') {
                // 如果是函数，则去调用，调用要 call then user x
                // y => resolve , r => reject
                then.call(x, y => {
                    if (called) {
                        return;
                    }
                    called = true;
                    // resolve中很可能再次返回一个Promise实例
                    resolvePromise(promise2, y, resolve, reject);
                    // resolve(y)
                }, r => {
                    if (called) {
                        return;
                    }
                    called = true;
                    reject(r);
                })
            } else {
                if (called) {
                    return;
                }
                called = true;
                resolve(x);
            }
        } catch (error) {
            if (called) {
                return;
            }
            called = true;
            reject(error);
        }
    } else {
        // 否则就是普通值
        resolve(x);
    }
}

class Promise {
    constructor(execute = () => {
    }) {
        // Promise整体状态
        this.status = PENDING;
        // 成功回调
        this.onFulfilledCb = [];
        // 失败回调
        this.onREjectedCb = [];

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = RESOLVE;
                this.value = value;
                this.onFulfilledCb.forEach(cb => cb());
            }
        }

        let reject = (value) => {
            if (this.status === PENDING) {
                this.status = REJECT;
                this.value = value;
                this.onREjectedCb.forEach(cb => cb());
            }
        }

        // 如果执行函数内有错误，则直接抛出
        try {
            execute(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        // 判断是不是函数，如果是函数，则往下执行，如果不是函数，则给一个函数，返回当前值
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        };

        let promise2 = new Promise((resolve, reject) => {
            // 同步执行
            // 成功执行
            if (this.status === RESOLVE) {
                /**
                 * 这段逻辑不可抽离出去，抽离出去会报错 cannot access 'promise2' before initialization
                 * 猜测可能在执行函数，将抽离出去的代码返回时，new Promise还没有执行完毕
                 */
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            }
            // 失败执行
            if (this.status === REJECT) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            }

            // 异步执行
            if (this.status === PENDING) {
                this.onFulfilledCb.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
                this.onREjectedCb.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
            }
        })

        return promise2;
    }

    finally(cb) {
        return this.then(
            // 这里将 resolve.then返回，是为了保证 cb 中的代码执行完毕，返回then中返回的Promise
            data => this.resolve(cb(data)).then(() => data),
            err => this.resolve(cb(err)).then(() => {
                throw err;
            })
        )
    }

    static resolve = (arg) => {
        if (isPromise(arg)) {
            let promise2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let x = arg.then();
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            })
            return promise2;
        } else {
            return new Promise(resolve => {
                resolve(arg);
            })
        }
    }
    static all = (values) => {
        return new Promise((resolve, reject) => {
            let arr = [];
            let index = 0;

            const pushIn = (key, data) => {
                arr[key] = data;
                index++;
                if (index === values.length) resolve(arr);
            }

            for (let i = 0; i < values.length; i++) {
                const item = values[i];
                if (isPromise(item)) {
                    item.then(data => {
                        pushIn(i, data);
                    }, reject);
                } else {
                    pushIn(i, item);
                }
            }
        })
    }

    static defer = () => {
        let dfd = {};
        dfd.promise = new Promise((resolve, reject) => {
            dfd.resolve = resolve;
            dfd.reject = reject;
        })
        return dfd;
    }
    static deferred = this.defer;

    static author = 'lxh'
}
