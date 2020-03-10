class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  pushElement(node){
    if(this.top == null){
      this.top = node;
    }
    else{
      node.next = this.top;
      this.top = node;
    }
  }

  popElement(){
    if(this.top == null){
      console.log('Error: Stack underflow');
      return;
    }
    else{
      let popped = this.top.data; 
      this.top = this.top.next;
      return popped;
    }
  }

  printStack(){
    let current = this.top;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

let stack = new Stack();

stack.pushElement(n1);
stack.pushElement(n2);
stack.pushElement(n3);
stack.pushElement(n5);
stack.pushElement(n4);

stack.printStack();

console.log(`Element popped: ${stack.popElement()}`);
console.log(`Element popped: ${stack.popElement()}`);

console.log('------After Popping-----');

stack.printStack();
