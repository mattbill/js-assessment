exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function (num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number


    //So...here's my first solution...
    //var result;
    //if (typeof num !== 'number') {
    //    result = false;
    //} else if (num % 3 === 0 && num % 5 === 0) {
    //    result = 'fizzbuzz';
    //} else if (num % 3 === 0) {
    //    result = 'fizz';
    //} else if (num % 5 === 0) {
    //    result = 'buzz';
    //} else {
    //    result = num;
    //}


    //Or you could get crazy and do some linked ternaries just for fun!
    result =
    typeof num !== 'number' ? false :
      num % 3 === 0 && num % 5 === 0 ? 'fizzbuzz' :
      num % 3 === 0 ? 'fizz' :
      num % 5 === 0 ? 'buzz' :
      num;

    return result;
  }
};
