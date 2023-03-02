const Node = function (value) {
  return {
    value: value,
    next: null,
  };
};

const LinkedList = function (value) {
  const node = Node(value);
  this.head = node;
  this.tail = this.head;
  this.length = 1;
};

LinkedList.prototype.push = function (value) {
  const node = Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }

  this.length++;
  return this;
};

LinkedList.prototype.print = function () {
  const current = this.head;

  while (current.next) {
    console.log(current.value);
    current = current.next;
  }
};

LinkedList.prototype.pop = function () {
  if (!this.head) return undefined;

  let temp = this.head;
  let prev = this.head;

  while (temp.next) {
    prev = temp;
    temp = temp.next;
  }

  this.tail = prev;
  this.tail.next = null;
  this.length--;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }

  return temp;
};

const list = new LinkedList(1);
const item = list.push(2);

console.log(item);

list.pop();
list.pop();

console.log(item);
