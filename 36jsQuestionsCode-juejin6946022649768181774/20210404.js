/*
// 类型识别
// typeof 可以正确识别：Undefined、Boolean、Number、String、Symbol、Function 等类型的数据，但是对于其他的都会认为是 object，
// 比如 Null、Date 等，所以通过 typeof 来判断数据类型会不准确。但是可以使用 Object.prototype.toString 实现。
// console.log(typeof new Date())
function getRealType(obj) {
    console.log(Object.prototype.toString.call(obj).split(' ')[1].replace(']','').toLowerCase())
}
getRealType(new Date())
getRealType(()=>{})
getRealType(null)
getRealType(new Function("console.log(123)"))
* */


/*
// 继承
A.原型链继承存在的问题：
问题1：原型中包含的引用类型属性将被所有实例共享；
问题2：子类在实例化的时候不能给父类构造函数传参；
* */
function Animal() {

}
