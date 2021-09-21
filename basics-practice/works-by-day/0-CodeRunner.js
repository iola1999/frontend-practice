function find(input) {
    let data = [...input]
    return {
        data: data,
        where(query) {
            const queryKeys = Object.keys(query)
            // filter
            data = data.filter(item => queryKeys.every(queryKey => queryKey instanceof RegExp
                ? query[queryKey].test(item[queryKey])
                : item[queryKey] === queryKey))
            return this;    // this 是指当前这个 obj
        },
        orderBy(key, sort) {
            data.sort((a, b) => sort === 'asc' ? a[key] - b[key] : b[key] - a[key])
            return data;
        },
    }
}
