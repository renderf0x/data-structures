var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  // limited array has the following methods:
  // set(i,v)
  // get(i)
  // each(iterator)
  //
};

HashTable.prototype.insert = function(k, v){
  var item = {key : k, value : v};
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(hash) || [];
  contents.push(item);
  this._storage.set(hash, contents);
};

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
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
