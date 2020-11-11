class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //O(log n)
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //O(log n)
  lookup(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        console.log(currentNode);
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    console.log("Not Found");
    return null;
  }

  //O(log n)
  //   remove(value) {
  //     currentNode = this.lookup(value);
  //     if(currentNode === null) {
  //         console.log('No element such found to remove');
  //         return;
  //     }
  //     if(currentNode.left === null && currentNode.right === null) {

  //     }
  //   }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(80);

// console.log(tree);
// JSON.stringify(traverseRecursion(tree.root));
JSON.stringify(traverseLoop(tree.root));

console.log("Lookup");
tree.lookup(20);
//     9
//  4     20
//1  6  15  170

// Pre Order Traversal using Recursion
function traverseRecursion(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  console.log(tree);
  return tree;
}

// Pre Order Traversal using Loop --> with the help of stack
function traverseLoop(node) {
  const stack = [];
  let tree = new Node(node.value);
  while (node !== null || stack.length !== 0) {
    if (node !== null) {
      tree = node;
      stack.push(node);
      node = node.left;
      console.log(tree);
      return tree;
    } else {
      node = stack.pop();
      node = node.right;
    }
  }
}
