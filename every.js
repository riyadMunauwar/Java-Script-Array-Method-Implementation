function every(source, callback, thisArg){
  
  if(thisArg) callback = callback.bind(thisArg);
  
  for(var i = 0; i < source.length; i++){
    if(!callback(source[i], i, source)) return false;
  }
  
  return true;
  
}
