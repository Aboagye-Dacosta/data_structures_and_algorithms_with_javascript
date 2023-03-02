class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;

    return temp;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(value, index) {
    let temp = this.get(index);
    if (!temp) return false;
    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    if (index < 0 || index > this.length - 1) return undefined;

    const node = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;

    before.next = node;
    node.next = after;
    node.prev = before;
    after.prev = node;
    this.length++;

    return this;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    let temp = this.get(index);
    // let holder = this.get(index);
    if (!temp || !holder) return false;

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;

    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }

  printRev() {
    if (this.length < 1) return undefined;

    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }

  print() {
    if (this.length < 1) return undefined;
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList(10);
list.push(12);
list.push(15);
// list.unshift(20);

// console.log(list);
// list.print();
// console.log("printing reverse");
// list.printRev();

// console.log("shifting the first value");
// list.shift();

// console.log("forward direction");
// list.print();

// console.log("reversed direction");
// list.printRev();

// console.log(list.get(1));
// console.log(list.get(2));

// console.log("removing element");
// list.remove(2);

// // list.print();
// list.insert(1, 1110);
// list.unshift(22);
// list.print();
// console.log(list);

list.unshift(44);

// list.shift();
list.push(1);
list.push(11);

list.shift();
list.unshift(1000);

list.insert(4, 222);
console.log(list);
list.print();
