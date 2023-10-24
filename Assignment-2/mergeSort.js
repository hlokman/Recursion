function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const leftPart = array.slice(0, Math.ceil(array.length / 2));
  const rightPart = array.slice(Math.ceil(array.length / 2));
  let recArray = mergeSort(leftPart).concat(mergeSort(rightPart));
  let sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    sortedArray.push(Math.min(...recArray));
    recArray.splice(recArray.indexOf(Math.min(...recArray)), 1);
  }

  return sortedArray;
}

/*function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else if (array.length == 2) {
    if (array.slice(0, array.length / 2) > array.slice(array.length / 2)) {
      return array
        .slice(array.length / 2)
        .concat(array.slice(0, array.length / 2));
    } else if (
      array.slice(0, array.length / 2) < array.slice(array.length / 2)
    ) {
      return array
        .slice(0, array.length / 2)
        .concat(array.slice(array.length / 2));
    }
  }

  if (array.length % 2 === 0) {
    return mergeSort(array.slice(0, array.length / 2)).concat(
      mergeSort(array.slice(array.length / 2))
    );
  } else if (array.length % 2 === 1) {
    return mergeSort(array.slice(0, array.length / 2 + 1)).concat(
      mergeSort(array.slice(array.length / 2 + 1))
    );
  }
}

function merge(leftPar, rightPart) {

}*/
