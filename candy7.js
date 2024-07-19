// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  // 實作寫在這裡

  const evenNumbers = numbers.filter((num) => {
    return num % 2 == 0;
  });
  const oddNumbers = numbers.filter((num) => {
    return num % 2 != 0;
  });

  if (evenNumbers.length == 1) {
    return evenNumbers[0];
  } else {
    return oddNumbers[0];
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

//想法：發現作為此題目引數的兩組陣列當中，第一組陣列只有一個不能被2 整除的數字，第二組陣列當中只有一個會被2整除的數字。因此，我先設兩個空陣列，一個裝偶數值，另一個則是裝非偶數的值

//再透過for迴圈的方式遊歷帶入的引數，分別找出能被2整除以及不能被2整除的數字，並分別將他們推到屬於他們的陣列當中

//最後再去判斷這兩組當中哪一組陣列裡面只有一個值，此為答案，並回傳該值//
