let name = 'Riyad Munauwar'.split('');

let revName = reduce(name, (acc, item) => acc + item, ' ');

console.log(revName);

function reduce(source, callback, initValue) {
  if(source && callback && typeof callback === 'function') {
    var accumulator = initValue || 0;

    for(var i = 0; i < source.length; i++){
      accumulator = callback(accumulator, source[i], i, source);
    }

    return accumulator;
  }
}

