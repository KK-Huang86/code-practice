// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  // 實作寫在這裡

  const strTosplit = str.split("_");

  for (let i = 1; i <= strTosplit.length - 1; i++) {
    strTosplit[i] =
      strTosplit[i].charAt(0).toUpperCase() + strTosplit[i].slice(1);
  }

  return strTosplit.join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
