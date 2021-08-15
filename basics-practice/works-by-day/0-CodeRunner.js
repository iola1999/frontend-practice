class Animal {
}

class Dog extends Animal {
}

const dog = new Dog()

console.log(dog instanceof Animal)


function myInstanceof(obj, func) {
    let L = obj
    const R = func.prototype
    let result = false
    while (L.__proto__) {
        if (L.__proto__ === R) {
            result = true
            break
        } else {
            L = L.__proto__
        }
    }
    return result
}

console.log(myInstanceof(dog, Animal))
