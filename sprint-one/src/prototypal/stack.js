var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.counter = 0;

  return obj;
};

var stackMethods = {
  size : function(){
    return this.counter;
  },
  push : function(value){
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop : function(){
    if (this.counter > 0)
    {
      this.counter--;
      var temp = this.storage[this.counter];
      delete this.storage[this.counter];
      return temp;
    }
  }
};


