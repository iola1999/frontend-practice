// function Add(left: number, right: number): number {
//     return left + right;
// }
//
// console.log(Add(1, 2));
//
//
// // 接口
// interface Rectangle {
//     witdh: number;
//     height: number;
//     color?: string;
// }
//
// const getDescFromRectangle = (oneRect: Rectangle): Object => {
//     return {
//         size: oneRect.height * oneRect.witdh,
//         description: 'a ' + oneRect.color + ' rectangle'
//     };
// }
//
// console.log(getDescFromRectangle({witdh: 10, height: 3}));
// // 泛型
// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
//
// console.log(createArray<string>(3, 'x')); // ['x', 'x', 'x']
// 类
class Shape {
    constructor() {
        this.description = 'One shape with unknown size';
    }
    ;
    printDescription() {
        console.log(this.description);
    }
}
class Rectangle extends Shape {
    constructor(properties) {
        super();
        this.witdh = properties.witdh;
        this.height = properties.height;
        this.size = this.witdh * this.height;
        if (properties.color) {
            this.description = 'One ' + properties.color + ' rectangle with size:' + this.size;
        }
        else {
            this.description = 'One rectangle with size:' + this.size;
        }
    }
    ;
}
const oneShape = new Shape();
oneShape.printDescription();
const oneRec = new Rectangle({ witdh: 3, height: 4, color: 'red' });
oneRec.printDescription();
