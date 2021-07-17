



function forEach(target, callback, thisArg){
  if(typeof(callback) === 'function') {
    if(thisArg && typeof(thisArg) === 'object') callback = callback.bind(thisArg);

    for(var i = 0; i < target.length; i++){
      callback(target[i], i , target);
    }
  }
}
