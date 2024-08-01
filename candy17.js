// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

// function countBits(num) {
//   // 實作寫在這裡
//   const numTobinary = num.toString(2); //將num透過toString(2) 轉為二進位數
//   let sum = 0;
//   for (let i = 0; i <= numTobinary.length - 1; i++) {
//     if (numTobinary[i] == "1") {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// console.log(countBits(1234)); // 5
// console.log(countBits(1450)); // 6
// console.log(countBits(9527)); // 8

function countBits(num) {
  return num
    .toString(2)
    .split("")
    .filter((digit) => digit == "1").length;
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
