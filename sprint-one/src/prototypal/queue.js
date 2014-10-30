var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.firstItem = 0;
  obj.lastItem = 0;

  return obj;
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


