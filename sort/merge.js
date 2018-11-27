function merge(left, right) {
	var result = [];
  var lLen = left.length;
  var rLen = right.length;
  var l = 0;
  var r = 0;
  while(l < lLen && r < rLen) {
  	if (left[l] < right[r]) {
    	result.push(left[l++]);
    } else {
    	result.push(right[r++]);
    }
  }

  return result.concat(left.slice(l).concat(right.slice(r)));
}

const mergeSort = (arr) => {
	len = arr.length;
  if (len < 2) return arr;
  var mid = Math.floor(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, len);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
