var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function Promise(execute) {
    var that = this;
    that.state = PENDING;
    that.onFulfilledFn = [];
    that.onRejectedFn = [];

    function resolve(value) {
        setTimeout(function () {
            if (that.state === PENDING) {
                that.state = FULFILLED;
                that.value = value;
                that.onFulfilledFn.forEach(function (fn) {
                    fn(that.value);
                })
            }
        })
    }

    function reject(reason) {
        setTimeout(function () {
            if (that.state === PENDING) {
                that.state = REJECTED;
                that.reason = reason;
                that.onRejectedFn.forEach(function (fn) {
                    fn(that.reason);
                })
            }
        })
    }

    try {
        execute(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    var that = this;
    var promise;
    if (that.state === FULFILLED) {
        promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    onFulfilled(that.value);
                } catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    if (that.state === REJECTED) {
        promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    onRejected(that.reason);
                } catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    if (that.state === PENDING) {
        promise = new Promise(function (resolve, reject) {
            that.onFulfilledFn.push(function () {
                try {
                    onFulfilled(that.value);
                } catch (reason) {
                    reject(reason);
                }
            })
            that.onRejectedFn.push(function () {
                try {
                    onRejected(that.reason);
                } catch (reason) {
                    reject(reason);
                }
            });
        });
    }
}

Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(111111)
    }, 2000)
})
