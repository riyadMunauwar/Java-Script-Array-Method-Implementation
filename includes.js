
function includes(source, element){
  if(source && source instanceof Array) {
    if(element) {
      var i = 0;
      while(i < source.length){
        if(element === source[i]) return true;
        i++;
      }
      return false;
    }
  }
}



console.log(includes([1,2,3], 2)) // Expected result: true



