
console.log(filter([3, 4, 5, 6, 4], item => item > 3))

function filter(target, callback, thisArg) {
  if(callback && typeof(callback) === 'function') {
    if(thisArg && typeof(thisArg) === 'object') callback = callback.bind(thisArg);

    let result = [];

    for(let i = 0; i < target.length; i++) {
      if(callback(target[i], i, target)) result.push(target[i]);
    }

    return result;
  }
}
