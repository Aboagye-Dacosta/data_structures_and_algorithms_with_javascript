class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new Node(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = last;
    } else {
      this.last.next = node;
      this.last = node;
      //   this.start = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  print() {
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const queue = new Queue(21);
queue.enqueue(100);

// queue.dequeue();
console.log(queue);
