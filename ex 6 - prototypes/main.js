// Step 1
myForEach([0, 1, 2], function(value, index) {
  console.log(value, index, this[index] === value /* should be true */);
});

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(arr, arr[i], i);
  }
}

function myForEach2(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myForEach2 = myForEach2;

//Step 2 - Make this work
[0, 1, 2].myForEach2(function(value) {
  console.log(value);
});
