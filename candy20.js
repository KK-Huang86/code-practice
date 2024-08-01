// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  // 實作寫在這裡
  const oToMatch = str.match(/o/gi);
  const xToMatch = str.match(/x/gi);
  let oToCount;
  let xToCount;

  if (oToMatch) {
    oToCount = oToMatch.length;
  } else {
    oToCount = 0;
  }

  if (xToMatch) {
    xToCount = xToMatch.length;
  } else {
    xToCount = 0;
  }

  return oToCount == xToCount;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
