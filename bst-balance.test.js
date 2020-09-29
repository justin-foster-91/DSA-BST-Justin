const { bstBalanced, numbersDiffByOneOrLess } = require('./bst-balance')
const BinarySearchTree = require('./binary-search-tree')

test('numbersDiffByOneOrLess, detects if numbers differ by one or less ', () => {
  expect(numbersDiffByOneOrLess([4, 5, 5, 5, 4, 5])).toBe(true);
  expect(numbersDiffByOneOrLess([4, 5, 6, 5, 4, 5])).toBe(false);
});

test('bstBalanced, detects bst is balanced ', () => {
  const balancedBST = new BinarySearchTree();
  balancedBST.insert(10, 10);
  balancedBST.insert(5, 5);
  balancedBST.insert(15, 15);

  const unbalancedBST = new BinarySearchTree();
  unbalancedBST.insert(10, 10);
  unbalancedBST.insert(5, 5);
  unbalancedBST.insert(15, 15);
  unbalancedBST.insert(20, 20);
  unbalancedBST.insert(17, 17);

  expect(bstBalanced(balancedBST)).toBe(true);
  expect(bstBalanced(unbalancedBST)).toBe(false);
});