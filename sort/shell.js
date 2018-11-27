const shell = (originalArray) => {
  const arr = [...originalArray]; // prevent mutations
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (var i = 0; i < (arr.length - gap); i++) {
      let currentIndex = i;
      let gapedIndex = i + gap;
      while (currentIndex >= 0) {
        if (arr[gapedIndex] < arr[currentIndex]) {
          const tmp = arr[currentIndex];
          arr[currentIndex] = arr[gapedIndex];
          arr[gapedIndex] = tmp;
        }
        gapedIndex = currentIndex;
        currentIndex -= gap;
      }

    }
    // Shrink the gap.
    gap = Math.floor(gap / 2);
  }

  return arr;
};

module.exports = shell;
