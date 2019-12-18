let result = [];
arrayToLookIntoIndex = 0;
function without(arrayToFilter, arrayToLookInto) {
  arrayToFilter.sort((a, b) => a - b);
  arrayToLookInto.sort((a, b) => a - b);
  if (!arrayToFilter.includes(arrayToLookInto[arrayToLookIntoIndex])) {
    result.push(arrayToLookInto[arrayToLookIntoIndex]);
  }
  if (arrayToLookIntoIndex === arrayToLookInto.length - 1) {
    return result;
  } else {
    arrayToLookIntoIndex++;
    without(arrayToFilter, arrayToLookInto);
  }
}
without([1, 2], [1, 2, 1, 4, 5]);
console.log(result);
