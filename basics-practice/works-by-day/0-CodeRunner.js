Function.prototype.bind2 = function (context, ...partArgs) {
    const obj = Object.create(context) || window
    const symFoFn = Symbol("fn")
    obj[symFoFn] = this // fn
    return function (...leftArgs) {
        obj[symFoFn](...partArgs, ...leftArgs)
    }
}

function say(word1, word2) {
    this.name = "123"
    console.log(this.name, word1, word2)
}

const obj = {
    name: "demo"
}

const boundSay = say.bind(obj, 1, 2)
new boundSay
console.log(obj)
