// 今天看一下排序，很久没写了，都是直接 .sort
// 还看了 ES6 的 Proxies，Vue3 的响应式就是基于它的。

/** 冒泡
// 时间 O(n^2)
function bubbleSort(nums: number[]): number[] {
  const result = [...nums];
  let rightPtr = result.length - 1;
  while (rightPtr > 0) {
    for (let index = 0; index < rightPtr; index++) {
      if (result[index] > result[index + 1]) {
        // 左边大于右边的话就交换
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
      }
    }
    // 这时 rightPtr-1 ~ result.length-1 的都已经是有序的了
    rightPtr -= 1;
  }
  return result;
}
const sourceArray: number[] = [77, 10, 7, 15, 3];
console.log(bubbleSort(sourceArray));
*/

/** 选择排序
// 遍历数组选出最小值，从原数组删除，写入新数组。时间 O(n^2)
function chooseSort(nums: number[]): number[] {
  const result: number[] = [];
  const backupArr = [...nums];
  while (backupArr.length > 0) {
    let minValue: number = backupArr[0],
      minIndex: number = 0;
    for (let index = 1; index < backupArr.length; index++) {
      if (backupArr[index] < minValue) {
        minValue = backupArr[index];
        minIndex = index;
      }
    }
    result.push(minValue);
    backupArr.splice(minIndex, 1);
  }
  return result;
}
const sourceArray: number[] = [77, 10, 7, 15, 3];
console.log(chooseSort(sourceArray));
 */

/** 计数排序
// 需要先知道最小值 最大值，生成一个长度是其差值+1的数组，遍历原，计数，遍历新数组，输出结果
// 时间 O(m+n)，空间消耗大（在 js 中是不是还可以受益于稀疏数组？），需要知道最大值最小值。
function countSort(nums: number[]): number[] {
  // 假设已经知道 最小值 10，最大值 150 了，这不重要。
  const minValue = 10,
    maxValue = 150;
  const countArr: number[] = new Array(maxValue - minValue + 1); // 不填充 0，可以省下空间？
  for (let index = 0; index < nums.length; index++) {
    if (countArr[nums[index] - minValue] === undefined) {
      countArr[nums[index] - minValue] = 1;
    } else {
      countArr[nums[index] - minValue] += 1;
    }
  }
  const result: number[] = [];
  for (let index = 0; index < countArr.length; index++) {
    if (countArr[index] > 0) {
      // countArr[index] 个 minValue + index
      for (let pushCount = 1; pushCount <= countArr[index]; pushCount++) {
        result.push(minValue + index);
      }
    }
  }

  return result;
}
const sourceArray: number[] = [77, 11, 17, 10, 13, 15, 17, 13];
console.log(countSort(sourceArray));

 */

/**快速排序
// 选一个基准值，开三个数组存分别存比基准值小的，一样的，大的。然后对小的大的数组递归调用，与中间的结果拼接起来
// 平均时间复杂度 O(nlog n)，最坏O(n^2)，稳定性不如归并排序。随机取基准值的话是稳定的 O(nlog n)
// 空间复杂度 O(log n)
function quickSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }
  const pickOneValue = nums[Math.floor(Math.random() * nums.length)]; // 随机取基准值
  const lower: number[] = [];
  const equal: number[] = [];
  const higher: number[] = [];
  nums.forEach(item => {
    if (item === pickOneValue) {
      equal.push(item);
    } else {
      item > pickOneValue ? higher.push(item) : lower.push(item);
    }
  });
  return [...quickSort(lower), ...equal, ...quickSort(higher)];
}
const sourceArray: number[] = [77, 11, 17, 10, 13, 15, 17, 13];
console.log(quickSort(sourceArray));
*/

// /** ES6 Proxies
// https://es6.ruanyifeng.com/#docs/proxy
// Proxy对象使你能够包装目标对象 通过这样可以拦截和重新定义该对象的基本操作。
interface DetailInfo {
  auther?: string;
  buyUrl?: string;
}
interface Book {
  name: string;
  price?: number;
  detailInfo: DetailInfo;
}
const book: Book = {
  name: "深入浅出 Node.js",
  // price: 25, // 稍后测试一下 新增的属性能否监听
  detailInfo: {
    auther: "Ming",
  },
};

const handler: ProxyHandler<Book> = {
  get: function (target: Book, prop: string | symbol, receiver): any {
    console.info("[Proxy]访问", prop);
    return target[prop];
  },
  set: function (target: Book, prop: string | symbol, value): boolean {
    console.info("[Proxy]修改", prop, value);
    if (prop === "price" && value <= 0) {
      throw new RangeError("价格数值不正确");
    }
    target[prop] = value;
    return true; // 这个似乎没有作用
  },
};

const wrappedBook = new Proxy(book, handler);
console.log("wrappedBook.name ->", wrappedBook.name);
wrappedBook.price = 25;
console.log("wrappedBook.price ->", wrappedBook.price);
// wrappedBook.price = -1;
// console.log("wrappedBook.price ->", wrappedBook.price);

wrappedBook.detailInfo.auther = "Aaa"; // 只拦截到 detailInfo，用它实现响应式 也还是需要递归调用的

// 测试一下 其他的 proxy 属性
var twice: ProxyHandler<Function> = {
  apply(target, ctx, args) {
    // console.log(arguments);
    return Reflect.apply(arguments[0], arguments[1], arguments[2]) * 2;
  },
};
function sum(left: number, right: number) {
  return left + right;
}
var sumProxied = new Proxy(sum, twice);
sumProxied(1, 2); // (1+2)*2
sumProxied.call(null, 5, 6); // call 实际上也是调用 apply？这一段没看明白
sumProxied.apply(null, [7, 8]);
// */
