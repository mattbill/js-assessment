exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {

  },

  wordWrap: function (str, cols) {

  },

  reverseString: function (str) {
    var result = '';
    for (var i = 0, len = str.length; i < len; i++) {
      result = str[i] + result;
    }
    return result;
  }
};
