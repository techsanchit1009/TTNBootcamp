let myMap = new Map();

myMap.set('name','sanchit');
myMap.set(function(){}, 'this is the value of function key');
myMap.set({}, 'this is the value of object key');

console.log('---------------MAP-------------');
console.log(myMap);
console.log(`Value of key 'name': ${myMap.get('name')}`);
console.log(`All the keys: ` , myMap.keys());

// --------------SET ---------------

let mySet = new Set();
console.log('---------------SET-------------');
mySet.add(1);
mySet.add(3);
mySet.add(2);
mySet.add(3);
mySet.add(5);
mySet.add('some text');
console.log(mySet);
console.log('Deleting an element..');
mySet.delete(5);
console.log(mySet);

if(mySet.has(3)){
  console.log(`Size of Set: ${mySet.size}`);
}


