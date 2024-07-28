// function squareDigits(num) {
//   // 實作寫在這裡
//   let newString = num.toString(); //將傳入的引數轉為字串
//   let newArry = Array.from(newString); //再將字串轉為陣列
//   let square = (x) => {
//     //定義一個函數來計算平方
//     return x * x;
//   };
//   let squareNumber = newArry.map(square); //使用map語法，將裡面的數字都丟出去做平方，形成新的陣列
//   return squareNumber.join(""); //最後再將陣列合併成字串
// }

// console.log(squareDigits(3212)); // 印出 9414
// console.log(squareDigits(2112)); // 印出 4114
// console.log(squareDigits(387)); // 印出 96449

// const numberReducer = (num) => {
//   // 將數字轉換為字串，然後轉換為數字陣列
//   const numToStr = num.toString();
//   const numArr = Array.from(numToStr, Number);

//   // 計算數字陣列的總和
//   const sum = numArr.reduce((acc, cur) => acc + cur, 0); // 初始值為0

//   // 如果總和小於10，直接返回
//   if (sum < 10) {
//     return sum;
//   }

//   // 否則遞迴調用 numberReducer，將新的總和作為參數
//   return numberReducer(sum);
// };

// console.log(numberReducer(9527)); // 印出 5
// console.log(numberReducer(1450)); // 印出 1
// console.log(numberReducer(5566108)); // 印出 4
// console.log(numberReducer(1234567890)); // 印出 9

function divisors(integer) {
  const arr = [];
  let num = 2;
  while (integer > num) {
    if (integer % num == 0) {
      arr.push(num);
    } else if (num == integer) {
      break;
    } else {
      num++;
    }
  }
  return arr;
}

console.log(divisors(15));
