exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    var newFn = fn.bind(obj);
    return newFn();
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    var arr = [];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key + ': ' + obj[key]);
      }
    }
    return arr;
  }
};
