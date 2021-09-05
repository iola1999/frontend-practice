function PromiseF(newF) {
    this.callbackList = [];
    this.data = null;
    newF(finalValue => {
        setTimeout(() => {
            this.data = finalValue
            // console.log("finalValue", finalValue);
            this.callbackList.forEach(callbackItem => callbackItem(finalValue))
        });
    });
}

PromiseF.prototype.then = function (fulfilled) {
    return new PromiseF((resolve) => {
        this.callbackList.push(() => {
            const result = fulfilled(this.data)
            // console.log(result)
            if (result instanceof PromiseF) {
                // console.log('instanceof true')
                result.then(resolve)
            } else {
                // console.log('instanceof false')
                resolve(result)
            }
        })
    })
}

new PromiseF(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 200);
})
    .then(res => {
        console.log("then1", res);
        return new PromiseF((resolve2) => {
            resolve2('then1-resolve')
            // setTimeout(() => {
            // }, 200);
        });
    })
    .then(res => {
        console.log("then2", res);
    });
