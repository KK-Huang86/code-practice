// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  // 程式碼寫在這裡
  let newList = [];
  let zeroList = [];

  //宣告兩個空陣列

  for (let i = 0; i <= arr.length - 1; i++)
    if (arr[i] === 0) {
      zeroList.push(arr[i]);
    } else {
      newList.push(arr[i]);
    }

  //將list這個陣列根據[是否為0]的條件判斷之下，為0者用push()的方式推到zeroList陣列當中最後一位;不為0者，則用push()的方式推到newList陣列當中最後一位

  return [...newList, ...zeroList];

  //最後再回傳newList這個陣列 跟 名為zeroList的陣列合在一起
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
