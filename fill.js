function fill(source,value, start, end) {
  
  
  if(!(start || end || value)) return fillAll(source, null, 0, source.length);
  
  if(start && !end) return fillAll(source, value, start, source.length);
  
  return fillAll(source, value, start, end);
  

  function fillAll(souce, value, start, end) {
    for(var i = start; i < end; i++){
      if(value) source[i] = value;
      source[i] = 0;
    }
  }
  
  
}
