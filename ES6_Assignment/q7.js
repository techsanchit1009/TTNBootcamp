let nestedArr = [1,2,[3,4,[5,6],['name','age']]];

const flattenService = (toBeFlattened, flattenedArr) => {
  if(Array.isArray(toBeFlattened)){
    toBeFlattened.forEach(item => flattenService(item, flattenedArr));
  }
  else{
    flattenedArr.push(toBeFlattened);
  }
}

const flatten = arr => {
  let flattenedArr = [];
  arr.forEach(item => flattenService(item, flattenedArr));
  return flattenedArr;
}

console.log('Nested Array : ', nestedArr);
console.log('Flattened Array: ', flatten(nestedArr));