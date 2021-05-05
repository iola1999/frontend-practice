function permute(input): string[][] {
  // 抄来的全排列
  var permArr = [],
    usedChars = [];

  function main(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }

  return main(input);
}

function arrangeAndCompare(numArray: string[], useLength: number): number | boolean {
  // 用最后 useLength 个数字排列，跟 inputNum 比较下，大于的话就是结果
  const startNums: number =
    parseInt(numArray.slice(0, numArray.length - useLength).join("") || "0") * 10 ** useLength;
  // 生成排列的逻辑好复杂不会写，先暴力把题做了：
  const editableNums: string[] = numArray.slice(numArray.length - useLength);
  const toCompareNum: number = parseInt(editableNums.join(""));
  // console.log(toCompareNum);
  const allResult = permute(editableNums)
    .map(item => parseInt(item.join("")))
    .sort();
  // console.log(allResult);
  let result: number | boolean = false;
  for (let i = 0; i < allResult.length; i += 1) {
    if (allResult[i] > toCompareNum) {
      result = allResult[i];
      break;
    }
  }
  if (result) {
    result = startNums + result;
  }
  return result;
}

function nextNumber(inputNum: number): number | boolean {
  const numArray: string[] = String(inputNum).split("");
  let result: number | boolean = false;
  for (let i = 2; i <= numArray.length; i += 1) {
    result = arrangeAndCompare(numArray, i);
    if (result) {
      console.log("替换了", i, "位数找到结果");
      break;
    }
  }
  return result;
}

console.log(12645, "=>", nextNumber(12645)); // 12654
console.log(1234, "=>", nextNumber(1234)); // 1243
console.log(1253, "=>", nextNumber(1253)); // 1325
console.log(12543, "=>", nextNumber(12543)); // 13245
console.log(18765432, "=>", nextNumber(18765432)); // 21345678
console.log(54321, "=>", nextNumber(54321)); // false
