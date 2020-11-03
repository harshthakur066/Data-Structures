//

class QueueUsingStacks {
  constructor() {
    this.first = [];
    this.last = [];
  }

  // O(n)
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  // O(n)
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  // O(1)
  peek() {
    if (this.last.length > 0) {
      console.log(this.last[0]);
      return this.last[0];
    }
    console.log(this.first[this.first.length - 1]);
    return this.first[this.first.length - 1];
  }
}

const myQueue = new QueueUsingStacks();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();

console.log(myQueue);
