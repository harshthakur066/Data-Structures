// Binary Heap is always a complete binary tree so can be represented in array.

class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  //   O(log n)
  // It is called always after adding the element to the array
  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    console.log("i", i);
    const temp = this.heap[i];

    while (i > 1 && temp > this.heap[i / 2]) {
      this.heap[i] = this.heap[i / 2];
      i = i / 2;
    }
    this.heap[i] = temp;
  }
}

const myHeap = new BinaryHeap();
// myHeap.insert(30);
myHeap.insert(10);
myHeap.insert(20);
myHeap.insert(40);
// myHeap.insert(15);

console.log(myHeap);
