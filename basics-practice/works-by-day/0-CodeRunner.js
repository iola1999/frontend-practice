function threeSplit(input) {
    const arr = input.split("").reverse();
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
        if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
            result.push(',')
        }
    }
    console.log(result.reverse().join(""))
}

threeSplit("12345678")
