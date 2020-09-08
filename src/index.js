
exports.min = function min (array) {
  if (isInvalidArray(array)) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (isInvalidArray(array)) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (isInvalidArray(array)) return 0;
  return array.reduce((previous, current) => previous + current, 0) / array.length;
}

function isInvalidArray(array) {
  return array === undefined || array.length === 0
}