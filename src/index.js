
exports.min = function min (array) {
  return executeMathMethod(array, 'min');
}

exports.max = function max (array) {
  return executeMathMethod(array, 'max');
}

exports.avg = function avg (array) {
  return isInvalidArray(array)
    ? 0 : array.reduce((previous, current) => previous + current, 0) / array.length;
}

function executeMathMethod(array, method) {
  return isInvalidArray(array) ? 0 : Math[method](...array);
}
function isInvalidArray(array) {
  return array === undefined || array.length === 0
}