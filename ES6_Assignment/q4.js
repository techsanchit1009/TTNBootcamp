class myClass{  
  static counter(){
    this.count++;
    return this.count;
  }
  sayHello(){
    console.log('Hello from myClass');
  }
}

myClass.count = 0;

console.log(`Get count: ${myClass.counter()}`);
console.log(`Get count: ${myClass.counter()}`);
console.log(`Get count: ${myClass.counter()}`);
console.log(`Get count: ${myClass.counter()}`);

let obj = new myClass();
obj.sayHello();