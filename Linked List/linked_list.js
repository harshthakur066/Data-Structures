// 10-->15-->99

const linkedListDemo = {
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
}

const linkedList = new LinkedList(10);

console.log(linkedList2);
