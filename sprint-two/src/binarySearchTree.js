var makeBinarySearchTree = function(value){
  var obj = Object.create(makeBinarySearchTree.prototype);
  obj.left = null;
  obj.right = null;
  obj.value = value;
  return obj;
};

makeBinarySearchTree.prototype.insert = function(value) {
  if (value < this.value){
    if (!this.left){
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right){
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

makeBinarySearchTree.prototype.contains = function(value) {
  if (this.value === value){
    return true;
  }

  if (this.left && this.right){
    return this.left.contains(value) || this.right.contains(value);
  } else if (this.left) {
    return this.left.contains(value)
  } else if (this.right) {
    return this.right.contains(value)
  }
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback) {
  // body...
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//
// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
