function myNew(Parent, ...rest) {
    const child = Object.create(Parent.prototype)
    const result = Parent.call(child, ...rest)
    return (typeof result) === 'object' ? result : child
}
