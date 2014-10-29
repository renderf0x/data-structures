var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstItem = 0;
  var lastItem = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastItem] = value;
    lastItem++;
  };

  someInstance.dequeue = function(){
    var temp = storage[firstItem];
    delete storage[firstItem];
    firstItem++;

    return temp;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
