/* 发布订阅 EventEmitter
class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }

  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }

  once(eventName, fn) {
    // 即生成一个函数，代替调用on+off
    const tempFn = (...args) => {
      fn(...args);
      this.off(eventName, tempFn);
    };
    this.on(eventName, tempFn);
  }

  emit(eventName, ...args) {
    const callbackQueue = this.events[eventName] || [];
    callbackQueue.forEach(cb => {
      cb(...args);
    });
  }

  off(eventName, fn) {
    if (fn) {
      this.events[eventName] = this.events[eventName].filter(fnItem => fnItem !== fn);
    } else {
      // 不传第二个参数的话，会清空所有的注册
      this.events[eventName] = [];
    }
  }
}

let eventBus = new EventEmitter();
let fn1 = function (value) {
  console.log("fn1 called", value);
};
let fn2 = function (value) {
  console.log("fn2 called", value);
};
eventBus.on("onFun1", fn1);
eventBus.on("onFun1", fn1);
eventBus.on("onFun1", fn2);
eventBus.on("onFun2", fn2);
eventBus.emit("onFun1", 11);
eventBus.emit("onFun2", 12);
eventBus.off("onFun1", fn1);
eventBus.emit("onFun1", 15);
eventBus.off("onFun1");
eventBus.off("onFun2");
console.log("全部取消，测试一下once");
eventBus.once("onFun1", fn1);
eventBus.emit("onFun1", 17);
eventBus.emit("onFun1", 17);
* */

/* 解析 URL 参数为对象
// 应该就是写个 qs ?没考虑 url encode
const queryString = "a=1&b=2&c=3&d&e=4";
const queryStringParser = qs => {
  const result = {};
  qs.split("&").forEach(queryPart => {
    if (queryPart.indexOf("=") !== -1) {
      result[queryPart.split("=")[0]] = queryPart.split("=")[1];
    } else {
      result[queryPart] = true;
    }
  });
  return result;
};
console.log(queryStringParser(queryString));
* */

/* 替换字符串模板，练习下正则使用。
const strTemplate =
  "我是{{name}}，年龄{{age}}，女朋友是{{girlfriend}}，恶心的测试用例{{a\\{\\{b}}可以吗";
const strTemplateParser = (template, obj) => {
  const regExp = /{{(.*?)}}/; // 用 (\w+) 的话也行
  if (regExp.test(template)) {
    const [replaceStr, key, ..._] = regExp.exec(template);
    console.log(replaceStr, key);
    template = template.replace(replaceStr, obj[key]);
    return strTemplateParser(template, obj);
  } else {
    return template;
  }
};
console.log(strTemplateParser(strTemplate, { name: "Xiaoming", age: 17, "a\\{\\{b": "haha" }));
* */

/* 图片懒加载
TODO:这个不想写。直接看了原文。
是 addEventListener('scroll', imgLazyLoad)
let rect = img.getBoundingClientRect()
if (rect.top < window.innerHeight) img.src = img.dataset.src。以及已经显示过的图片移除掉。
* */

/* 函数防抖
const handleSumbit = function (name) {
  console.log("handleSumbit 真正执行", name);
};

// 简单版本
const debounceV1 = function (func, waitExec) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments); // 记一下 apply bind call 等区别，还有 arguments
    }, waitExec);
  };
};

// immediate 是指第一次调用时就执行，后面防抖间隔内调用的忽略。
// 支持取消（仅限非immediate时）、立即执行、（立即执行时）返回结果（这个算了 没啥应用场景额）。是否可以做成 Promise 返回结果？
const debounce = function (func, waitExec, immediate) {
  let timer;
  const debounced = function () {
    clearTimeout(timer);
    if (immediate) {
      if (!timer) {
        func.apply(this, arguments);
      }
      timer = setTimeout(() => {
        timer = null; // 说明这次防抖间隔结束了。必须置null，clearTimeout 的还是有值的，影响上面 if (!timer)
      }, waitExec);
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments); // 记一下 apply bind call 等区别，还有 arguments
      }, waitExec);
    }
  };
  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };
  return debounced;
};

const handleSumbitDebounced = debounce(handleSumbit, 1000, true);
setTimeout(handleSumbitDebounced, 0, "try1");
setTimeout(handleSumbitDebounced, 700, "try2");
setTimeout(handleSumbitDebounced, 1500, "try3");
setTimeout(() => {
  console.log("第二轮测试");
}, 2600);
setTimeout(handleSumbitDebounced, 2600, "try4");
setTimeout(handleSumbitDebounced, 2800, "try5");
* */

/* 函数节流
const handleSumbit = function (name) {
  console.log("handleSumbit 真正执行", name);
};
const throttle = function (func, waitExec) {
  let lastSuccessExec = 0;
  return function () {
    if (+new Date() - lastSuccessExec >= waitExec) {
      lastSuccessExec = +new Date();
      func.apply(this, arguments);
    }
  };
};

const handleSumbitThrottled = throttle(handleSumbit, 1000);
setTimeout(handleSumbitThrottled, 0, "try1"); // 第一次
setTimeout(handleSumbitThrottled, 700, "try2"); // 未到 0+1000
setTimeout(handleSumbitThrottled, 1100, "try3"); // 超过了 0+1000
setTimeout(handleSumbitThrottled, 2050, "try4"); // 应该是跟谁比较呢，是 0+1100 +1000 吧， 不执行
setTimeout(handleSumbitThrottled, 2250, "try5"); // 超过了 0+1100 +1000
// TODO: 复杂需求 leading、tailing 就先不写了
* */

/* 函数柯里化
// 跟偏函数不是一个意思（下面再写）
// 先看一个简单的例子
// function add(x, y) {
//   return x + y;
// }
//
// function currying(fn, ...rest1) {
//   return function (...rest2) {
//     return fn.apply(null, rest1.concat(rest2));
//   };
// }
// console.log(currying(add, 1)(2));

// 如何实现高阶的？
// const { curry } = require("lodash");
const curry = func => {
  let curried = (...args) => {
    return args.length === func.length
      ? func(...args)
      : (...newArgs) => curried(...args, ...newArgs); // 说明还有剩余参数
  };
  return curried;
};

function add(a, b, c) {
  return a + b + c;
}

let addCurry = curry(add);
console.log(addCurry(1)(2)(3));
console.log(addCurry(1, 2)(3));

* */

/* 偏函数
// const { partial } = require("lodash");

// function add(a, b, c) {
//   return a + b + c;
// }

// const partial = (func, ...partArgs) => {
//   return (...leftArgs) => func(...partArgs, ...leftArgs);
// };
//
// let partialAdd = partial(add, 1);
// console.log(partialAdd(2, 3));
// 要支持占位的话
function partial(fn, ...args) {
  return (...leftArg) => {
    const newArgs = [...args];
    for (let i = 0; i < newArgs.length; i += 1) {
      if (newArgs[i] === "_") {
        newArgs[i] = leftArg[0];
        leftArg.shift();
      }
    }
    return fn(...newArgs, ...leftArg);
  };
}

function clg(a, b, c) {
  console.log(a, b, c);
}

let partialClg = partial(clg, "_", 2);
partialClg(1, 3); // 依次打印：1, 2, 3
* */

/* JSONP
// 原理就是新建一个 script，封装生成 url，window[callbackName]，拿到数据后 removeChild
* */

/* 封装 AJAX
// new XMLHttpRequest() .open .setRequestHeader  .onreadystatechange
* */

/* 实现 forEach
Array.prototype.forEach2 = function (func, thisArg) {
  // 还可以加上 this == null、typeof callback !== "function"的校验，throw new TypeError
  // thisArg 可选。当执行回调函数 callback 时，用作 this 的值。
  const backupArray = Object(this); // 防止被修改？
  for (let i = 0; i < backupArray.length; i++) {
    // 原文还提到了 .length >>> 0 ，无符号右移
    // 是为了保证结果有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0。
    func.call(thisArg, backupArray[i], i, backupArray);
  }
};
[1, 2, 3].forEach2(item => {
  console.log(item);
});
* */

/* 实现 map
Array.prototype.map2 = function (func, thisArg) {
  const backupArray = Object(this); // 防止被修改？
  const result = [];
  for (let i = 0; i < backupArray.length; i++) {
    result.push(func.call(thisArg, backupArray[i], i, backupArray));
  }
  return result;
};
console.log([1, 2, 3].map2(item => item + "/"));
// 顺便：["1", "2", "3"].map(parseInt)//返回应该是 [1, NaN, NaN]。注意参数 .map((item, index) => parseInt(item, index));
* */

/* 实现 filter
Array.prototype.filter2 = function (func, thisArg) {
  const backupArray = Object(this); // 防止被修改？
  const result = [];
  for (let i = 0; i < backupArray.length; i++) {
    func.call(thisArg, backupArray[i], i, backupArray) && result.push(backupArray[i]);
  }
  return result;
};
console.log([1, 2, 3].filter2(item => item > 1));
* */

/* 实现 some
Array.prototype.some2 = function (func, thisArg) {
  const backupArray = Object(this); // 防止被修改？
  let result = false;
  for (let i = 0; i < backupArray.length; i++) {
    if (func.call(thisArg, backupArray[i], i, backupArray)) {
      result = true;
      break;
    }
  }
  return result;
};
console.log([1, 2, 3].some2(item => item > 9));
* */

/* 实现 reduce
Array.prototype.reduce2 = function (func, initialValue) {
  let currentValue = initialValue;
  const backupArray = Object(this);
  for (let i = 0; i < backupArray.length; i++) {
    currentValue = func(currentValue, backupArray[i]);
  }
  return currentValue;
};
let arr = [1, 2, 3, 4];
const result = arr.reduce2((acc, current) => acc + current, 0); //10
console.log(result);
* */
