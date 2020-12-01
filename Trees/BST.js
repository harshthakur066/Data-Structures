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
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  // O(n) Traversal
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(list);
    return list;
  }

  // O(n) Traversal
  // DFS is the traversal like preorder, inorder, and postorder
  DFTPreOrder(currentNode, list) {
    return traversePreOrder(this.root, []);
  }
  DFTPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFTInOrder() {
    return traverseInOrder(this.root, []);
  }
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }

  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }

  list.push(node.value);

  return list;
}

// BFS space complexity is O(n)i.e the size of queue whereas in DFS the
// space complexity is O(log n) i.e. height of the tree as it usese
// stack for recursion or in loop.
// Time complexity is same O(n) as both of them have to visit each element once.
// Explanation - https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(80);
tree.remove(80);

//     9
//  4     20
//1  6  15  170

// console.log(tree);
// JSON.stringify(traverseRecursion(tree.root));
JSON.stringify(traverseLoop(tree.root));

console.log("Lookup");
tree.lookup(9);

console.log("BFS");
tree.breadthFirstSearch();

console.log("DFS-preorder", tree.DFTPreOrder());
console.log("DFS-inorder", tree.DFTInOrder());
console.log("DFS-postorder", tree.DFTPostOrder());

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
