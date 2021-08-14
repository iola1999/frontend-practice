const aaa = [1, 2, 3, 4, 5]

for (let i = 0; i < aaa.length; i++) {
    console.log(i, aaa[i])
    if (aaa[i] === 2) {
        aaa.splice(i, 1)
        i--
    }
}
