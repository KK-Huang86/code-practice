// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  for (let i = 0; i <= chars.length - 1; i++) {
    const findChar = chars[i + 1].charCodeAt() - chars[i].charCodeAt();
    if (findChar > 1) {
      return String.fromCharCode(chars[i].charCodeAt() + 1);
    }
  }
  return 0;
}

//設定一個for迴圈，一個一個檢查引數的值，再透過charCodeAt()的方式轉為UTF-16碼讓前後的值相減，若為相鄰的字母，相減的結果應為1
//所以若大於1的結果，即表示中間有缺少的字元。透過if的方式設定條件，將chars[i]該值的UTF-16+1，用String.fromcharCode的方式，找到缺少的字元

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// // 提示：
// // 可使用字串的 charCodeAt 方法...

// const str = "HELLO WORLD";
// const n = str.charCodeAt(0);

// console.log(n);
