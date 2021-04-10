/* 实现 函数原型方法 call
// 使用一个指定的 this 值和一个或多个参数来调用一个函数。
Function.prototype.call2 = function (obj) {
  obj = obj ? Object(obj) : window; // 绑定为 null 时指向全局
  obj.fn = this; // this 是 dmeoFunc（即 call2 的调用源）
  let args = [...arguments].slice(1); // 剩余的参数
  let result = obj.fn(...args);
  delete obj.fn;
  return result;
};

function dmeoFunc(age, color) {
  console.log(this.name, age, color);
}

const cat = {
  name: 'Tom'
}
dmeoFunc.call(cat, 3, "yellow");
dmeoFunc.call2(cat, 3, "yellow");
dmeoFunc.apply(cat, [3, "yellow"]);
dmeoFunc.apply2(cat, [3, "yellow"]);
console.log(Object.prototype.toString.call2([]))
// 如果不让用 ES6 展开运算符的话，会麻烦不少，https://www.cnblogs.com/echolun/p/12144344.html
* */

/* 实现 函数原型方法 apply
// apply 区别是 函数参数用数组传入。TODO：null 等边界情况未考虑
Function.prototype.apply2 = function (obj) {
  obj = obj ? Object(obj) : window;
  obj.fn = this; // this 是 dmeoFunc（即 call2 的调用源）
  let args = arguments[1]; // 剩余的参数
  let result = obj.fn(...args);
  delete obj.fn;
  return result;
};
* */

// /* 实现 函数原型方法 bind
// bind 是返回一个绑定了 this 的函数，支持柯里化
Function.prototype.bind2 = function (obj) {
  const partArgs = [...arguments].slice(1); // [0] 是 dmeoFunc
  obj = obj ? Object(obj) : window;
  obj.fn = this; // this 是 dmeoFunc
  return function (...args) {
    return obj.fn(...partArgs, ...args);
  };
};

function dmeoFunc(age, color) {
  console.log(this.name, age, color);
}

const cat = {
  name: "Tom",
};
const boundFunc = dmeoFunc.bind(cat, 3);
boundFunc("yellow");
const boundFuncTest = dmeoFunc.bind2(cat, 3);
boundFuncTest("yellow");
new boundFunc // undefined 3 undefined
new boundFuncTest // Tom 3 undefined

// 可以看到 new 调用时 this 指向不太对 参考 https://www.cnblogs.com/echolun/p/12178655.html
//
// * */
