class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

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
