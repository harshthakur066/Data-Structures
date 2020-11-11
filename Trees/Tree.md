# Binary Tree

## Basic Formulae

### Heignt of Binary Tree

        log2(n+1) - 1 < h < n-1

"So, from O(log n) to O(n)"

For Strict binary tree max height:

        (n-1)/2

### Number of Nodes in a Binary Tree

        h+1 < n < (2^h+1) - 1

### Relation between internal and external nodes

        deg(0) = deg(2) + 1

## Array Representation of Binary Tree

Element are filled by level in array. Only Complete/Full Binary Trees can be represented by arrays. Can't represent missing nodes in between.

    element: i

    L child: 2\*i

    R child: 2\*i + 1

    Parent: - Floor(i/2)

## Linked Representaion of Binary Tree

Node:

     L child | data | R child
