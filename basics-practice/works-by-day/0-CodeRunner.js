function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

function* gen() {
    yield console.log(1)
    yield delay(1000).then(() => {
        console.log(2)
    })
    yield console.log(3)
}

// 先测试一下基础原理
const step = gen();
// step.next()
// step.next().value.then(() => {
//     step.next()
// })

function change(genedFunc) {
    const item = genedFunc.next();
    const {value, done} = item
    if (done) return value;
    if (value instanceof Promise) {
        value.then(() => {
            change(genedFunc)
        })
    } else {
        change(genedFunc)
    }
}

change(step)
