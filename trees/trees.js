class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #recurse(temp, node) {
    if (node.value > temp.value) {
      if (!temp.right) {
        temp.right = node;
        return;
      }
      temp = temp.right;
    } else {
      if (!temp.left) {
        temp.left = node;
        return;
      }
      temp = temp.left;
    }
    this.#recurse(temp, node);
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let temp = this.root;
      if (temp.value === value) return undefined;
      this.#recurse(temp, node);
    }
    return this;
  }

  lookup(value) {
    if (this.root == null) return false;
    let temp = this.root;

    while (temp) {
      if (value === temp.value) return true;
      if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      }
    }

    return false;
  }

  min() {
    if (this.root === null) return undefined;

    let temp = this.root.left;
    let min = this.root.value;

    while (temp) {
      min = temp.value;
      temp = temp.left;
    }

    return min;
  }

  max() {
    if (this.root === null) return undefined;

    let temp = this.root.right;
    let max = this.root.value;

    while (temp) {
      min = temp.value;
      temp = temp.right;
    }

    return max;
  }

  //   remove(value) {
  //     if (this.root === null) return undefined;
  //     let temp = this.root;
  //     let prev = this.root;

  //     while (temp) {
  //       prev = temp;
  //       if (value > temp.value) {
  //         temp = temp.right;
  //       } else if (value < temp.value) {
  //         temp = temp.left;
  //       } else {
  //           prev.left =
  //       }
  //     }
  //   }
}

const bst = new BinarySearchTree();
bst.insert(23);
bst.insert(19);
bst.insert(99);
bst.insert(10);
bst.insert(23);
bst.insert(100);
bst.insert(48);

console.log(bst);

console.log(bst.min());
