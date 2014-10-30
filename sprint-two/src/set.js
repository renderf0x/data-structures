var makeSet = function(){
  var set = Object.create(setPrototype);
  //set._storage = undefined;
  set.head = null;
  set.tail = null;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){ //addToTail
  if(this.set.head === null){
    this.set.head = this.set.tail = this.makeNode(item);
  } else {
    var tempNode = this.set.tail;
    this.set.tail = this.makeNode(item);
    tempNode.next = this.set.tail;
  }
};

setPrototype.contains = function(item){
  var node = this.set.head;
  while(node !== null){
    if(node.value === item){
      return true;
    }
    node = node.next;
  }
  return false;
};

setPrototype.remove = function(item){
  var node = this.set.head;
  while(node !== null){
    if (node.value === item){

    }
  }
};

setPrototype.makeNode = function(item){
  var node = {
    value : item,
    next  :  null
  };
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
