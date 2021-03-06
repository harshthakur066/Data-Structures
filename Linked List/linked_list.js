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

  // Lookup - O(n)
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  // Append - O(1)
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  // Prepend - O(1)
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // Traversal - O(n)
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  //Insert - O(n)
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const leader = this.traverse(index - 1);
    const target = leader.next;

    leader.next = newNode;
    newNode.next = target;

    this.length++;
  }

  // Remove or Delete - O(n)
  remove(index) {
    if (index >= this.length) {
      //   const leader = this.traverse(this.length - 2);
      //   leader.next = null;
      //   this.length--;
      //   return;
      return this.remove(this.length - 1);
    }
    if (index <= 0) {
      let target = this.head;
      this.head = target.next;
      this.length--;
      return;
    }
    const leader = this.traverse(index - 1);
    const target = leader.next;
    leader.next = target.next;

    this.length--;
  }

  // Reverse - O(n)
  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    this.tail = this.head;
    let first = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(15);
linkedList.append(99);
linkedList.prepend(1);
linkedList.prepend(33);
linkedList.insert(3, 68);
linkedList.insert(6, 79);
linkedList.remove(0);
linkedList.remove(4);
linkedList.reverse();

const list = linkedList.printList();
console.log(list.join(" --> "));
console.log(linkedList.length);
