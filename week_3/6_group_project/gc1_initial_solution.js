// Chase: Cleaned up the code for readability.  Passes all tests! :)

// write a function called sum, with an array parameter called arr
var sum = function (arr) {
  var sum = 0;

  for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
};

// write a function called mean, with an array parameter called arr
var mean = function (arr) {
  return sum(arr) / arr.length;
};

// write a function called median, with an array parameter called array
var median = function (arr) {
  var half = Math.floor(arr.length / 2);
  arr.sort();

  return arr.length % 2 ? arr[half] : (arr[half] + arr[half - 1]) / 2.0;
};