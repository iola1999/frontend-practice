function getCharIndex(char: string): number {
    return char.charCodeAt(0) - 'A'.charCodeAt(0)
}

function characterReplacement(s: string, k: number): number {
    // @ts-ignore
    const count: Array<number> = new Array(26).fill(0)
    let maxCount: number = 0
    let leftIdx = 0, rightIdx = 0
    while (rightIdx < s.length) {
        const windowLength: number = rightIdx - leftIdx + 1
        count[getCharIndex(s[rightIdx])] += 1
        maxCount = Math.max(maxCount, count[getCharIndex(s[rightIdx])])
        if (windowLength - maxCount > k) {
            count[getCharIndex(s[leftIdx])] -= 1
            leftIdx += 1
        }
        rightIdx += 1
    }
    return rightIdx - leftIdx
}

// console.log(characterReplacement("AAABDGXF", 2))
console.log(characterReplacement("AABABBA", 1))
