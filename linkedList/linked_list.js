const node = function (value) {
  return { value: value };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    let newNode = node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

const one = linkedList.insert(22);
const two = linkedList.insert(2);
const three = linkedList.insert(100);
const four = linkedList.insert(44);

console.log(linkedList.length);
linkedList.print();

// const five = linkedList.insertSpecific(two, 5);

// linkedList.print();
