const pro1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
}).finally(test => {
    console.log("finally pro1", test);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
        // reject(1)
    }, 2000);
}).finally(test => {
    console.log("finally pro2", test);
});

// Promise.all([pro1, pro2]).then((res) => {
//     console.log("all", res)
// })

function promiseAll(promises) {
    const result = [];
    let successCount = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            Promise.resolve(item)
                .then(res => {
                    result[index] = res;
                    successCount += 1;
                    if (successCount === promises.length) resolve(result);
                })
                .catch(err => reject(err));
        });
    });
}

promiseAll([pro1, pro2])
    .then(res => {
        console.log("all", res);
    })
    .catch(err => {
        console.log("all-err", err);
    });
