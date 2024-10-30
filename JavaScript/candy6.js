// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  // 實作寫在這裡

  numbers.sort((first, second) => {
    return first - second;
  });

  if (numbers[0] !== numbers[1]) {
    return numbers[0];
  } else {
    return numbers[numbers.length - 1];
  }
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// const data = [1, "a", "b", 3, "a", 4];
// const result = data.filter((el, index) => {
//   return data.indexOf(el) === index;
// });

// console.log(result);
