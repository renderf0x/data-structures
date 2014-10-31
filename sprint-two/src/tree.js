var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = makeTree(value);
  if(this.children === undefined){
    this.children = [];
  }
  this.children.push(childTree);
};

treeMethods.contains = function(target){
  var result = false;

  var treeCurse = function(tree){
    if(tree.value === target){
      result = true;
    }
    if(!tree.children){
      return;
    }
    for(var i = 0; i < tree.children.length; i++){
      treeCurse(tree.children[i]);
    }
  };

  treeCurse(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
