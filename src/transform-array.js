module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error();
      }

      if (arr.length === 0) {
        return arr;
      }

      let result = [];

      for (let index = 0; index < arr.length; index++) {
          if (arr[index] === '--discard-next') {
            if (index + 1 <= arr.length - 1) {
              index++;
            }
          } else if (arr[index] === '--discard-prev') {
            if (index - 1 >= 0) {
              result.pop();
            }
          } else if (arr[index] === '--double-next') {
            if (index + 1 <= arr.length - 1) {
              result.push(arr[index + 1]);
            }
          } else if (arr[index] === '--double-prev') {
            if (index - 1 >= 0) {
              result.push(arr[index - 1]);
            }
          } else {
          result.push(arr[index]);
        }
      }
      return result;
};
