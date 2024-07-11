// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  // 實作寫在這裡
  let newString = num.toString(); //將傳入的引數轉為字串
  let newArry = Array.from(newString); //再將字串轉為陣列
  let square = (x) => {
    //定義一個函數來計算平方
    return x * x;
  };
  let squareNumber = newArry.map(square); //使用map語法，將裡面的數字都丟出去做平方，形成新的陣列
  return squareNumber.join(""); //最後再將陣列合併成字串
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

// https://ithelp.ithome.com.tw/articles/10270708?sc=hot
// https://ithelp.ithome.com.tw/articles/10212010

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const odd = (n) => n % 2 == 1
// const square = (n) => n * n
// const sum = (acc, cv) => acc + cv

// const result = list
//   .filter(odd) // 奇數
//   .map(square) // 平方
//   .reduce(sum) // 和

// console.log(result)
// // 所有奇數的平方和
