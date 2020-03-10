const arr = [1, 2, 3, 'robb','mark', 'robb'];
console.log('Array: ', arr);
const mySet = Array.from(new Set(arr));
console.log('Array with unique elements: ');

for(let item of mySet){
  console.log(item);
}

