// 为数据添加检测
function defineReactive(data, key, val) {
    // val 闭包保存
    observe(val); // 递归遍历所有子属性
    let dep = new Dep(); // 新建一个dep
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('可能需要添加订阅者，如果已经有了就不加')
            return val;
        },
        set: function (newVal) {
            if (val === newVal) return; // 如果值未发生改变就return
            val = newVal;
            console.log(
                "属性" + key + "已经被监听了，现在值为：“" + newVal.toString() + "”"
            );
            dep.notify(); // 如果数据发生变化，就通知所有的订阅者。
        },
    });
}

// 监听对象的所有属性
function observe(data) {
    if (!data || typeof data !== "object") {
        return; // 如果不是对象就return
    }
    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key]);
    });
}

// Dep 负责收集订阅者，当属性发生变化时，触发更新函数。
function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach((sub) => sub.update());
    },
};


debugger
var library = {
    book1: {
        name: "",
    },
    book2: "",
};
observe(library);
library.book1.name = "vue权威指南"; // 属性name已经被监听了，现在值为：“vue权威指南”
library.book2 = "没有此书籍"; // 属性book2已经被监听了，现在值为：“没有此书籍”
// 如果直接替换整个 book1 会怎样
