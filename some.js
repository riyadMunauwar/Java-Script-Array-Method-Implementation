function some(source, callback, thisArg){
  if(callback && typeof callback === 'function') {

   if(typeof(thisArg) === 'object' && thisArg instanceof Object) callback = callback.bind(this);

  for(var i = 0; i < source.length; i++){
    if(callback(source[i], i, source)) return true;
  }

  return false;

  }
}
