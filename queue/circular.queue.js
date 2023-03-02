class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.length = 0;
    this.first = null;
    this.rear = null;
  }

  isEmpty() {
    return this.length == 0;
  }

  isFull() {
    return this.length === this.size;
  }

  enqueue(element) {
    if (this.isFull()) return null;
    const node = new Node(element);

    console.log(node);

    if (!this.first) {
      this.first = node;
      this.rear = node;
      this.rear.next = this.first;
    } else {
      const temp = this.rear.next;

      this.rear.next = node;
      node.next = temp;
      this.rear = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.rear = null;
    }
    {
      this.first = temp.next;
      this.rear.next = this.first;
    }
    temp.next = null;
    this.length--;
    return temp;
  }
}

const cQueue = new CircularQueue(7);

cQueue.enqueue(20);
cQueue.enqueue(100);
cQueue.enqueue(0);

cQueue.dequeue();
console.log(cQueue);
