let product = {price: 10, quantity: 2}, total = 0;
const depsMap = new Map(); // ①
const effect = () => {
    total = product.price * product.quantity
};
const track = key => {     // ②
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    dep.add(effect);
}

const trigger = key => {  // ③
    let dep = depsMap.get(key);
    if (dep) {
        dep.forEach(effect => effect());
    }
};

track('price');
effect();
console.log(`total: ${total}`); // total: 20
product.price = 20;
trigger('price');
console.log(`total: ${total}`); // total: 40
