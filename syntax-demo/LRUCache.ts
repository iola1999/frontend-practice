class LRUCache {
    maxSize: number;
    cacheMap: Object;
    keys: number[];

    constructor(maxSize: number) {
        this.maxSize = maxSize
        this.cacheMap = Object.create(null);
        this.keys = [];
    }

    put(key: number | string, value: any) {
        // 存入。调用 updateKeys
        this.cacheMap[key] = value;
        this.updateKeys(key)
    }

    get(key: number | string): any {
        // 如果找到了缓存，updateKeys 这个key到最后。如果没有找到，返回undefined
    }

    updateKeys(key: number | string) {
        // 检查当前key是否在keys中，在的话删掉他，移到最后一位。
        // 不在的话，看看keys长度有没有到maxSize，不到就直接插入最后一位，到了的话 pruneFirstCache 移除首位的缓存

    }

    pruneFirstCache() {
        delete this.cacheMap[this.keys[0]]
        this.keys.shift()
    }
}


const lrucache: LRUCache = new LRUCache(2);
lrucache.put(1, 'one');
lrucache.get(1);
