exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return (fn.bind(obj))();
  },

  functionFunction: function (str) {
    return function (str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures: function (arr, fn) {
    var results = [];
    arr.forEach(function (val, idx) {
      var x = val;
      var newFunc = function () {
        return fn(x);
      };
      results.push(newFunc);
    });

    return results;
  },

  partial: function (fn, str1, str2) {
    return function (punctuation) {
      return fn(str1, str2, punctuation);
    }
  },

  useArguments: function () {
    var sum = 0;
    _.each(arguments, function (val) {
      sum += val;
    });
    return sum;
  },

  callIt: function (fn) {
    var args = [].slice.call(arguments);
    args.shift();
    return fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    var args1 = [].slice.call(arguments);
    args1.shift();

    return function () {
      var args2 = [].slice.call(arguments);
      var argsFinal = args1.concat(args2);
      return fn.apply(null, argsFinal);
    }
  },

  curryIt: function (fn) {
    return function (x) {
      var _x = x;

      return function (y) {
        var _y = y;

        return function (z) {
          var _z = z;

          return fn(_x, _y, _z);
        }
      }
    }
  }
};
