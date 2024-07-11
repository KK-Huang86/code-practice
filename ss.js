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
