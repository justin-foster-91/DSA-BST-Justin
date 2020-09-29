const BinarySearchTree = require("./BinarySearchTree");

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  // console.log(BST)
  // console.log(BST.find(9))

  // BST.insert('E')
  // BST.insert('A')
  // BST.insert('S')
  // BST.insert('Y')
  // BST.insert('Q')
  // BST.insert('U')
  // BST.insert('E')
  // BST.insert('S')
  // BST.insert('T')
  // BST.insert('I')
  // BST.insert('O')
  // BST.insert('N')
  // while(1){
  // console.log(BST)
  // }
  return BST;
}
BST = main();

// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.value + tree(t.right)
// }
// console.log(tree(BST))

// function height(t) {
//     if(!t) {
//         return 0;
//     }
//     let leftHeight = height(t.left);
//     let rightHeight = height(t.right);
//     return Math.max(leftHeight, rightHeight) + 1;
// }
// console.log(height(BST))

// function isBST(node, min = null, max = null) {
//     if(!node)
//         return true;
//     if(max !== null && node.data >=max)
//         return false;
//     if(min !== null && node.data <= min)
//         return false;
//     const leftSide = isBST(node.left, min, node.data);
//     console.log('left side', leftSide)
//     const rightSide =  isBST(node.right, node.value, max);
//     console.log('right side', rightSide)

//     return leftSide && rightSide;
// }
// console.log(isBST(BST))

// function thirdLargest(tree) {

// }
// console.log(thirdLargest(BST))

function nthNode(node, n) {
    if(node) {
        nthNode(node.right, n)
        n.counter--
        console.log(node.value)
        nthNode(node.left, n)
        
        if(n.counter === 0) {
            console.log('value', node.value)
    }
    }
    console.log('counter', n)
}
nthNode(BST, {counter:3})