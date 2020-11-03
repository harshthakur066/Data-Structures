// Not prefered queues using arrays

class Queues {
  constructor() {
    this.queue = [];
  }

  // O(1)
  peek() {
    console.log(this.queue[this.queue.length - 1]);
    return this.queue[this.queue.length - 1];
  }

  // O(1)
  enqueue(value) {
    this.queue.push(value);
  }

  // O(n) --> This is the reason due to shifting in array
  dequeue() {
    this.queue.shift();
  }

  // O(1)
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
