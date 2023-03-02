//creating a linked list

//creating the node for the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// crating the linked list class

class LinkedList {

  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //creating the push method to add nodes to the end of the list
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { 
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //creating method for pop to remove nodes form the end of the list
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) this.tail = this.head;
    return temp;
  }

  get(index) {
    if (index < 0 || index > this.length)
      return new Error("list index out of range");

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (!temp) return false;
    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    if (index < 0 || index > this.length) return undefined;

    const node = new Node(value);
    let temp = this.get(index - 1);
    node.next = temp.next;
    temp.next = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    let before = this.get(index - 1);
    temp = before.next;
    before.next = temp.next;
    temp.next = null;

    before.next = null;
    this.length--;

    return temp;
  }

  reverse() {
    if (!this.head) return undefined;
    if (this.length === 1) return this;

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList(4);

const one = linkedList.push(33);
const two = linkedList.push(14);
const three = linkedList.push(3);
const four = linkedList.push(19);
// console.log(linkedList);

// linkedList.insert(0, 114);

// console.log(linkedList);

console.log(linkedList);



