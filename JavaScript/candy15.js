// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  // 實作寫在這裡
  if (str.length % 2 != 0) {
    str += "_";
  }
  const result = [];
  for (let i = 0; i <= str.length - 1; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  return result;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []

//想法：先將輸入的引數計算其字串長度，長度非偶數者最後加上底線
//之後透過迴圈一次+2的方式運行，再透過slice的方式將兩個為一組切割，最後推進名為result的陣列之中
