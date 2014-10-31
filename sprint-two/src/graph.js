var Graph = function(){
  var obj = Object.create(Graph.prototype);
  obj.firstNode = null;
  obj.nodeCount = 0;

  return obj;
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
    // TODO optimize later
    toNode = this.getNode(toNode);
  }




};

/*
 * Complexity: What is the time complexity of the above functions?
 */
