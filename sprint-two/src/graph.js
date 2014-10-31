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
    // TODO maybe be sad when only one input
    var node = this.makeNode(newNode);
    // TODO get toNode node
    this.addEdge(node.value, toNode);
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
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (typeof fromNode === "string"){
    // TYPE conversion nightmare!
    fromNode = this.getNode(fromNode);
    toNode = this.getNode(toNode);
  }

  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
