class Stack {
  constructor() {
    this.stack = [];
  }

  // O(1)
  peek() {
    console.log(this.stack[this.stack.length - 1]);
    return this.stack[this.stack.length - 1];
  }

  // O(1)
  push(value) {
    this.stack.push(value);
  }

  // O(1)
  pop() {
    this.stack.pop();
  }

  // O(1)
  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else return false;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("github");
myStack.push("youtube");
myStack.push("netflix");
myStack.pop();
myStack.peek();

console.log(myStack);

//Discord
//Udemy
//google
