function expandedForm(num) {
  const revStrNum = num.toString().split("").reverse(); // 將數字轉換成字串並反轉順序
  const mapNum = revStrNum
    .map((num, index) => {
      if (num !== "0") {
        return `${num}${index > 0 ? ` x 10^${index}` : ""}`; // 生成非零位數的展開形式部分
      } else {
        return null; // 對於零位數，返回 null 以後續過濾
      }
    })
    .filter((item) => item !== null); // 過濾掉值為 null 的部分

  return mapNum.reverse().join(" + ") || "0"; // 反轉並組合成最終展開形式的字串，如果 mapNum 為空，則返回 '0'
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 20 + 5
console.log(expandedForm(148)); // 印出 100 + 40 + 8
console.log(expandedForm(1450)); // 印出 1000 + 400 + 50
console.log(expandedForm(60308)); // 印出 60000 + 300 + 8
