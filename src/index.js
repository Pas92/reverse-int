module.exports = function reverse (n) {
  let arr = n.toString().split('');
  if (arr.length > 3) {
    arr.shift();
  }
  arr.reverse();
  return +arr.join('');
}
