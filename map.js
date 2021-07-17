let arr = [1,2,3];

let result = map(arr, (item) => item * 3);

console.log(result);


function map(target, callback, thisArg) {
  if( callback && typeof callback === 'function') {
    if( thisArg && typeof thisArg === 'object') callback = callback.bind(thisArg);

    let result = [];

    for(let i = 0; i < target.length; i++) {
        result.push(callback(target[i], i, target));
    }

    return result;
  }
}
