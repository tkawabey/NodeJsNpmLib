
// 関数を作成
const myOriginalLibrary = (a, b) => {
    return console.log(a + b);
  };
  
// 作成して関数をモジュールとしてエクスポートする
module.exports = myOriginalLibrary;