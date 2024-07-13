// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  // 實作寫在這裡
  const urlIndex = url.indexOf("#");

  if (urlIndex > 0) {
    return url.substring(0, urlIndex);
  } else {
    return url;
  }
}

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1
