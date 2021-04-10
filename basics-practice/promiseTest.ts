const task1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('task1Result')
        }, 3000)
    })
}
const task2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('task2Result')
        }, 3000)
    })
}

(async () => {
    const res = await Promise.all([task1(), task2(), null])
    console.log(res)
})()
