class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
  }

  addFirst(node) {
    if (this.head == null) {
      this.head = node;
      this.last = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
  }

  addLast(node) {
    if (this.head == null) {
      this.last = node;
    }
    else {
      this.last.next = node;
      this.last = node;
    }
  }

  length() {
    let currentNode = this.head;
    let length = 0;
    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }
    return length;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    return this.last.data;
  }
  printList() {
    let currentNode = this.head;
    console.log('-------------------')
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}


let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

let list = new LinkedList();

list.addFirst(n1);
list.addFirst(n5);
list.addLast(n3);
list.addLast(n2);
list.addFirst(n4);

console.log(`Length: ${list.length()}`)
console.log(`First node: ${list.getFirst()}`)
console.log(`Last node: ${list.getLast()}`)

list.printList();