describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert one value at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    expect(binarySearchTree.value).to.equal(5);
    expect(binarySearchTree.left.value).to.equal(2);
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });

    it('should use "depthFirstLog" on a more complete tree', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    bst2 = makeBinarySearchTree(14);
    bst2.insert(7);
    bst2.insert(10);
    bst2.insert(3);
    bst2.insert(5);
    bst2.insert(4);
    bst2.insert(22);
    bst2.insert(30);
    bst2.insert(31);
    bst2.insert(27);
    bst2.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([14,7,3,5,4,10,22,30,27,31]);
  });


});
