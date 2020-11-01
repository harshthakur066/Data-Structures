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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(15);
linkedList.append(99);

console.log(linkedList);
