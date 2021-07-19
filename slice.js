
function slice(source, start, end){
  if(source) {
       if(start && end) {
       var result = [], i = start;

        for(; i < end ;){
          result.push(source[i]);
          i++;
        }

        return result;
      }
  }
}

var arr = [1,2,3,4,5];

var sliceArray = slice(arr, 0, 3);
console.log(sliceArray);

