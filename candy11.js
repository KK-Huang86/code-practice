// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  // 實作寫在這裡
  return numbers.find(
    (item) => numbers.filter((num) => num == item).length % 2
  );
}
console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

//想法：透過find的方法，遊歷帶入的引數，並將其方法的數值item一一丟給filter去處理
//filter也會遊歷帶入的引數，篩出其方法的值(num)是否等於 item的值，並且將符合條件者建立一個新的陣列
//最後，再透過陣列的長度取餘數的方式進行判斷，餘數為0代表為 item出現的次數為偶數；餘數為1代表item出現的次數為奇數
//長度餘數為 0者，會被轉換為false 長度餘數為1者，會被轉換為true。
//find 的方式會去找到第一個返回結果為true的item
