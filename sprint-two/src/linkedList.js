var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null){
      list.head = list.tail = makeNode(value);
    }
    else{
      var tempNode = list.tail;
      list.tail = makeNode(value);
      tempNode.next = list.tail;
    }
  };

  list.removeHead = function(){
    var tempNode = list.head;
    list.head = list.head.next;
    return tempNode.value;
  };

  list.contains = function(target){
    var node = list.head;
    while (node !== null){
      if (node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
