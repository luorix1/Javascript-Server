var _ = require("underscore");

// Define array
var arr = [3, 6, 9, 12];

// Print first element of array
console.log(arr[0])
console.log(_.first(arr))

// Print last element of array
console.log(arr[arr.length - 1])
console.log(_.last(arr))