let data = {
    name: 'nike',
    info: {
        age: 21
    }
}
Object.keys(data).forEach(key => {
    defineProperty(data, key, data[key])
})

function defineProperty(target, key, value) {
    Object.defineProperty(target, key, {
        get: () => {
            console.log('get', target, key, value)
            return value
        },
        set: (value) => {
            console.log('set', target, key, value)
        }
    })
}

data.name = 'tom'
data.info.age = 22 // 这里监听到了数据获取（这里没有触发更改，get和set相对立，总要触发一个）
data.info = {age: 22} // 这里监听到了数据更改
