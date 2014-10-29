var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someObj = {};
  someObj.storage = {};
  someObj.firstItem = 0;
  someObj.lastItem = 0;

  _.extend(someObj, queueMethods);
  return someObj;
};

var queueMethods = {
  size: function(){
    return this.lastItem - this.firstItem;
  },
  enqueue: function(value){
    this.storage[this.lastItem] = value;
    this.lastItem++;
  },
  dequeue: function(){
    if (this.size() === 0){
      return;
    }
    var temp = this.storage[this.firstItem];
    this.firstItem++;
    return temp;
  }
};



