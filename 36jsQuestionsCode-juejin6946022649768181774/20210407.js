// /* 实现 函数原型方法 call、apply、bind
// 使用一个指定的 this 值和一个或多个参数来调用一个函数。
Function.prototype.call2 = function (obj) {
  obj = obj ? Object(obj) : window;
  obj.fn = this; // this 是 dmeoFunc（即 call2 的调用源）
  let args = [...arguments].slice(1); // 剩余的参数
  let result = obj.fn(...args);
  delete obj.fn;
  return result;
};

// 区别就是 apply 函数参数用数组传入。TODO：null等边界情况未考虑
Function.prototype.apply2 = function (obj) {
  obj = obj ? Object(obj) : window;
  obj.fn = this; // this 是 dmeoFunc（即 call2 的调用源）
  let args = arguments[1]; // 剩余的参数
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
// * */
