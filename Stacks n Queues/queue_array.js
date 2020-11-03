class Queues {
  constructor() {
    this.queue = [];
  }

  peek() {
    console.log(this.queue[this.queue.length - 1]);
    return this.queue[this.queue.length - 1];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    this.queue.shift();
  }

  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    } else return false;
  }
}

const myQueue = new Queues();
myQueue.enqueue("Harsh");
myQueue.enqueue("Ayan");
myQueue.enqueue("Shagun");
myQueue.enqueue("Pranay");
myQueue.dequeue();
myQueue.peek();

console.log(myQueue);

//Discord
//Udemy
//google
