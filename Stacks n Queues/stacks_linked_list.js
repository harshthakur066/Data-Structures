class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // O(1)
  peek() {
    console.log(this.top);
    return this.top;
  }

  // O(1)
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const target = this.top;
      this.top = newNode;
      this.top.next = target;
    }
    this.length++;
  }

  // O(1)
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }

  // O(1)
  isEmpty() {
    if (this.bottom) {
      return false;
    } else return true;
  }

  // O(n)
  printStack() {
    const arr = [];
    let currentNode = this.top;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("github");
myStack.push("youtube");
myStack.push("netflix");
myStack.pop();
myStack.peek();

// console.log("stack", myStack);

const list = myStack.printStack();
console.log(list.join(" --> "));
console.log(myStack.length);
