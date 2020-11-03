class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first);
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  printQueue() {
    const arr = [];
    let currentNode = this.first;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Harsh");
myQueue.enqueue("Ayan");
myQueue.enqueue("Shagun");
myQueue.enqueue("Pranay");
myQueue.dequeue();
myQueue.peek();

const list = myQueue.printQueue();
console.log(list.join(" <-- "));
console.log(myQueue.length);

//Joy
//Matt
//Pavel
//Samir
