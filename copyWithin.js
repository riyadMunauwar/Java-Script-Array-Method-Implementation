
function copyWithIn(source, target, start, end){
  var startEnd = (function(){
    var res = [];
    
    for(let i = start; i < end; i++)
      res.push(source[i]);
      
    return res;
    
  })();
  
  for(var i = 0; i < startEnd.length; i++){
    source[target] = startEnd[i];
    target++;
  }
  
  
}
var source = [1,2,3,4,5];

// source.copyWithin(0 , 3, 5);

copyWithIn(source, 0 , 3, 5);


console.log(source)
