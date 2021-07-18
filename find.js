

function find(source, callback, thisArg) {
  
  if(source && callback && typeof callback === 'function') {
    
    if(thisArg && typeof thisArg === 'object') callback = callback.bind(thisArg);
    
    
    for(var i = 0; i < source.length; i++){
      if(callback(source[i], i, source)) return source[i];
    }
    
  }
  
}

var arr = [1,2,3,4,5];

console.log(find(arr, (item) => item > 4));
