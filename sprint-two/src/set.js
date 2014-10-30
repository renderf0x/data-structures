var makeSet = function(){
  var set = Object.create(setPrototype);
  //set._storage = undefined;
  set.head = null;
  set.tail = null;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){ //addToTail
  if(this.head === null){
    this.head = this.tail = this.makeNode(item);
  } else if (this.contains(item) === false){
    var tempNode = this.tail;
    this.tail = this.makeNode(item);
    tempNode.next = this.tail;
  }
};

setPrototype.contains = function(item){
  var node = this.head;
  while(node !== null){
    if(node.value === item){
      return true;
    }
    node = node.next;
  }
  return false;
};

setPrototype.remove = function(item){
  var node = this.head;
  if (node.value === item){
    node.value = null;
    this.head = node.next;
    return;
  }
  var prevNode = node;
  node = prevNode.next;
  while(node !== null){
    if (node.value === item){
      prevNode.next = node.next;
      node.value = null;
    }
    node = node.next;
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
