const withoutArray = (arrayToFilter, arrayToLookInto) => {
  let result = [];
  arrayToFilter.sort((a, b) => a - b);
  arrayToLookInto.sort((a, b) => a - b);
  arrayToLookIntoIndex = 0;
  const filterAndFillResults = function() {
    if (!arrayToFilter.includes(arrayToLookInto[arrayToLookIntoIndex])) {
      result.push(arrayToLookInto[arrayToLookIntoIndex]);
    }
    if (arrayToLookIntoIndex === arrayToLookInto.length - 1) {
      return result;
    } else {
      arrayToLookIntoIndex++;
      name();
    }
  };
  return filterAndFillResults;
};

let without = withoutArray;
console.log(without());
