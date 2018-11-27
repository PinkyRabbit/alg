const quick = (arr) => {
  if (!arr.length) return arr;
  var pivot = arr[0];
  const left = [];
  const right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick(left).concat(pivot, quick(right));
};

module.exports = quick;
