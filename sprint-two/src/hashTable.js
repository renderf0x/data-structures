var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this.counter = 0;
  // limited array has the following methods:
  // set(i,v)
  // get(i)
  // each(iterator)
  //
};

HashTable.prototype.insert = function(k, v){
  if ((this.counter / this._limit) >= 0.75){
    this.resize(this._limit * 2);
  }
  var item = {key : k, value : v};
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(hash) || [];
  contents.push(item);
  this._storage.set(hash, contents);
  this.counter++;
};

HashTable.prototype.resize = function(size){
  var temp = this._storage;
  var oldSize = this._limit;
  this._limit = size;
  this.counter = 0;
  this._storage = makeLimitedArray(this._limit);
  //debugger;
  for (var j = 0; j < oldSize; j++){
    var contents = temp.get(j);
    if(contents && contents.length > 0){
      for(var i = 0; i < contents.length; i++){
        this.insert(contents[i].key, contents[i].value);
      }
    }
  }
}

HashTable.prototype.retrieve = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(hash);
  if (!contents){
    return null;
  }

  for (var i = 0; i < contents.length; i++){
    if (contents[i].key === k){
      return contents[i].value;
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(hash);
  if (!contents){
    return;
  }

  for (var i = 0; i < contents.length; i++){
    if (contents[i].key === k){
      var temp = contents.slice(0, i);
      contents = temp.concat(contents.slice(i+1, contents.length));
      this._storage.set(hash, contents);
      this.counter--;
      break;
    }
  }
  if (this._limit > 8 && (this.counter / this._limit) <= 0.25){
    this.resize(this._limit / 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
