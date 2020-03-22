module.exports = function countCats(arr) {
  let n = 0;
  for(const line of arr) {
    for(const s of line) {
      if(Object.prototype.toString.call(s) === "[object String]" && s == "^^") {
        ++n;
      }
    }
  }
  return n;
};
