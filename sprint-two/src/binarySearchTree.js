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
  // what we want: run the function on each item in proper depth first order
  // input: a binary tree
  // output: no ouput
  //
  // execute callback on self
  callback(this.value);
  // try left first
  if (this.left){
    // if left, recurse
    this.left.depthFirstLog(callback);
  }
  // try right
  if (this.right){
  //   if right recurse
    this.right.depthFirstLog(callback);
  }
  //
};

makeBinarySearchTree.prototype.breadthFirstLog = function(callback){
  if (!this.left && !this.right){
    callback(this.value);
    return;
  }

  var queue = makeQueue();
  var temp = this;

  do{
    callback(temp.value);
    if (temp.left){
      queue.enqueue(temp.left);
    }
    if (temp.right){
      queue.enqueue(temp.right);
    }

    temp = queue.dequeue();
  } while(queue.size() > 0);
  callback(temp.value);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
//
// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
