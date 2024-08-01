// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

// function uniqueOrder(sequence) {
//   // 實作寫在這裡

//   if (typeof sequence == "string") {
//     spuence = sequence.split("");
//   }

//   let result = [];

//   for (let i = 0; i <= sequence.length - 1; i++) {
//     if (sequence[i] !== sequence[i + 1]) {
//       result.push(sequence[i]);
//     }
//   }
//   return result;
// }

// console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
// console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
// console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
// console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

function uniqueOrder(sequence) {
  // 實作寫在這裡

  if (typeof sequence == "string") {
    sequence = sequence.split("");
  }

  const result = sequence.filter((element, index) => {
    return element !== sequence[index + 1];
  });
  return result;
}

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

// //chatGpt提供另外一個做法
// function uniqueOrder(sequence) {
//   // 如果輸入是字串，將其轉換為陣列
//   if (typeof sequence === "string") {
//     sequence = sequence.split("");
//   }

//   // 使用 filter 去除連續重複的元素
//   return sequence.filter((element, index) => {
//     return index === 0 || element !== sequence[index - 1];
//   });
// }

// console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
// console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
// console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
// console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

//1.先判斷輸入的引數是否為字串，如果是的話，先將字串轉為陣列

//2.再透過filter的方式檢視引數當中的元素，比較當前的元素跟下一個元素不一樣的話，該元素被保留；若一樣的話則會被過濾掉
