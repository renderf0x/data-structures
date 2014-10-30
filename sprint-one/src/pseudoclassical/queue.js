var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstItem = 0;
  this.lastItem = 0;
};

Queue.prototype.size = function() {
  return this.lastItem - this.firstItem;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastItem] = value;
  this.lastItem++;
};

Queue.prototype.dequeue = function() {
  if (this.size() === 0)
  {
    return;
  }
  var temp = this.storage[this.firstItem];
  delete this.storage[this.firstItem];
  this.firstItem++;
  return temp;
};


