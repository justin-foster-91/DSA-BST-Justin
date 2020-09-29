
// Calculate all leave node distance, relative to root
// Ensure all distances differ by 1 or less

// BSt => Boolean
function bstBalanced(BST) {
  return numbersDiffByOneOrLess(distancesFromRoot(BST))
}

// List of number => Boolean
function numbersDiffByOneOrLess(numbers) {
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)

  const diff = max - min
  return diff === 1 || diff === 0
}

// BST => List of numbers
function distancesFromRoot(BST, distance = 0) {
  if (BST.left === null && BST.right === null) {
    return [distance];
  }
  let distLeft = [];
  let distRight = [];

  if (BST.left !== null) {
    distLeft = distancesFromRoot(BST.left, distance + 1)
  }
  if (BST.right !== null) {
    distRight = distancesFromRoot(BST.right, distance + 1)
  }
  return distLeft.concat(distRight)
}

module.exports = { bstBalanced, numbersDiffByOneOrLess }