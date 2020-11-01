// 10-->15-->99

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Lookup
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  // Append
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  // Prepend
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
  }

  // Traversal
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  //Insert
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
    newNode.prev = leader;
    newNode.next = target;
    target.prev = newNode;

    this.length++;
  }

  // Remove or Delete
  remove(index) {
    if (index >= this.length) {
      return this.remove(this.length - 1);
    }
    if (index <= 0) {
      let target = this.head;
      this.head = target.next;
      this.head.prev = null;
      this.length--;
      return;
    }
    const leader = this.traverse(index - 1);
    const target = leader.next;
    const joiner = target.next;
    leader.next = joiner;
    if (joiner !== null) {
      joiner.prev = leader;
    }

    this.length--;
  }
}

const linkedList = new DoublyLinkedList(10);
linkedList.append(15);
linkedList.append(99);
linkedList.prepend(1);
linkedList.prepend(33);
linkedList.insert(3, 68);
linkedList.insert(6, 79);
linkedList.remove(0);
linkedList.remove(3);

// console.log(linkedList);

const list = linkedList.printList();
console.log(list.join(" --> "));
console.log(linkedList.length);
