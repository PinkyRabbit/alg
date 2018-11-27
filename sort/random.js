module.exports = (len) => {
  const arr = [];
  for (var i = 0; i < len; i++) {
    let el = Math.floor(Math.random()*100 + 1);
    arr.push(el);
  }
  return arr;
};
