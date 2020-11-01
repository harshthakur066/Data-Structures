// 10-->15-->99

let linkedListDemo = {
  head: {
    value: 10,
    next: {
      value: 15,
      next: {
        value: 99,
        next: null,
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Append
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // Prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(15);
linkedList.append(99);
linkedList.prepend(1);
linkedList.prepend(33);

console.log(linkedList);
