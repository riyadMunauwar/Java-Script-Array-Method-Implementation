// Java Scritp Array Concat Method Implementation

function concat(...source) {
  var mergeArray = [];
  
  for(var i = 0; i < source.length; i++)
    for(j = 0; j < source[i].length; j++)
      mergeArray.push(source[i][j]);
  
  return mergeArray;
}


console.log(concat([1,2,3], [4,5,6]));  // Res = [1, 2, 3, 4, 5, 6]
