// interface toCacheUnity {
//     [propName: any]: any;
// }

class LRUCache {
  maxSize: number;
  cacheMap: object;
  keys: (number | string)[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.cacheMap = Object.create(null);
    this.keys = [];
  }

  put(key: number | string, value: any) {
    console.log("存入", key, value);
    // 存入。调用 updateKeys
    this.cacheMap[key] = value;
    this.updateKeys(key);
    console.log("当前缓存", JSON.stringify(this.cacheMap), "当前lru队列", this.keys);
  }

  get(key: number | string): any {
    console.log("读取", key);
    // 如果找到了缓存，updateKeys 这个key到最后。如果没有找到，返回undefined
    const value = this.cacheMap[key];
    value !== undefined && this.updateKeys(key); // 没有找到缓存的话，不需要调用
    console.log("当前缓存", JSON.stringify(this.cacheMap), "当前lru队列", this.keys);
    return value === undefined ? -1 : value;
  }

  updateKeys(key: number | string) {
    // chcheMap 有值才会调用当前函数
    // 检查当前key是否在keys中，在的话删掉他，移到最后一位。
    // 不在的话，看看keys长度有没有到maxSize，不到就直接插入最后一位，到了的话 pruneFirstCache 移除首位的缓存
    const position: number = this.keys.indexOf(key);
    if (position > -1) {
      this.keys.splice(position, 1);
    } else {
      if (this.keys.length === this.maxSize) {
        // 需要作废最久未使用的那个缓存
        this.pruneFirstCache();
      }
    }
    this.keys.push(key);
  }

  pruneFirstCache() {
    console.log("作废最久未使用的缓存：", this.keys[0], this.cacheMap[this.keys[0]]);
    delete this.cacheMap[this.keys[0]];
    this.keys.shift();
  }
}

// const lrucache: LRUCache = new LRUCache(3);
// lrucache.put(1, 'one');
// lrucache.put(2, 'two');
// console.log('get 1:', lrucache.get(1));
// lrucache.put(3, 'three');
// lrucache.put(4, 'four');

/**
 * 输入：
["LRUCache","put","put","get","put","get","put","get","get","get"]
[[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
输出：
[null,null,null,0,null,2,null,-1,-1,4]
预期结果：
[null,null,null,0,null,-1,null,-1,3,4]
 */
export const lrucache: LRUCache = new LRUCache(2);
lrucache.put(1, 0);
lrucache.put(2, 2);
console.log("--------get 1:", lrucache.get(1));
lrucache.put(3, 3);
console.log("--------get 2:", lrucache.get(2));
lrucache.put(4, 4);
console.log("--------get 1:", lrucache.get(1));
console.log("--------get 3:", lrucache.get(3));
console.log("--------get 4:", lrucache.get(4));
