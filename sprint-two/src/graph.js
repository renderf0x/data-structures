var Graph = function(){
  this.firstNode = null;
  this.nodeCount = 0;
};

Graph.prototype.makeNode = function(value){
  var obj = {};
  obj.value = value;
  obj.edges = [];
  return obj;
}

Graph.prototype.addNode = function(newNode, toNode){
  if (this.nodeCount === 0){
    // TODO maybe support case with 2 initial inputs
    this.firstNode = this.makeNode(newNode);
    this.nodeCount++;
  } else if (this.nodeCount === 1) {
    // TODO maybe support case with 2 initial inputs
    var node = this.makeNode(newNode);
    this.addEdge(node, this.firstNode);
    this.nodeCount++;
  } else {
    if (!toNode){
      return;
    }
    var node = this.makeNode(newNode);
    toNode = this.getNode(toNode);

    var success = this.addEdge(node, toNode);
    if (!success){
      return;
    }

    this.nodeCount++;
  }
};

Graph.prototype.getNode = function(nodeVal){
  var visitedNodes = [];
  var result = null;

  if (!this.firstNode){
    return null;
  }

  var search = function(node){
    if (node.value === nodeVal){
      result = node;
    }
    visitedNodes.push(node);
    for (var i = 0; i < node.edges.length; i++){
      if (visitedNodes.indexOf(node.edges[i]) > -1){
        console.log("Skipping " + node.edges[i].value);
        continue;
      }
      search(node.edges[i]);
    }
  };

  search(this.firstNode);

  return result;
}

Graph.prototype.contains = function(node){
  return !!this.getNode(node);
};

Graph.prototype.removeNode = function(node){
  node = this.getNode(node);

  if (!node.edges.length){
    node.edges = null;
    node.value = null;
    this.nodeCount--;
    this.firstNode = null;
    return;
  }

  for (var i = 0; i < node.edges.length; i++){
    this.removeEdge(node.edges[i].value, node.value);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var node = this.getNode(fromNode);
  if (!node){
    return false;
  }

  for (var i = 0; i < node.edges.length; i++){
    if (node.edges[i].value === toNode){
      return true;
    }
  }

  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (typeof fromNode === "string"){
    fromNode = this.getNode(fromNode);
    toNode = this.getNode(toNode);
  }

  if (!fromNode || !toNode){
    return false;
  }

  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);

  return true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (typeof fromNode === "string"){
    fromNode = this.getNode(fromNode);
  }

  for (var i = 0; i < fromNode.edges.length; i++){
    if (fromNode.edges[i].value === toNode){
      toNode = fromNode.edges[i];
      for (var j = 0; j < toNode.edges.length; j++){
        if (toNode.edges[j].value === fromNode.value){
          var temp = toNode.edges.slice(0, j);
          temp.concat(toNode.edges.slice(j + 1, toNode.edges.length));
          toNode.edges = temp;
        }
        break;
      }

      var temp = fromNode.edges.slice(0, i);
      temp.concat(fromNode.edges.slice(i + 1, fromNode.edges.length));
      fromNode.edges = temp;
      break;
    }
    // TEST if no edge between nodes
    // exit

  }
  //deletion area
  if (fromNode.edges.length === 0){
    fromNode.value = null;
    this.nodeCount--;
  }
  if (toNode.edges.length === 0){
    toNode.value = null;
    this.nodeCount--;
  }
  if (this.nodeCount === 0){
    this.firstNode = null;
  }
  // TODO if node count === 0
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
