exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function (str) {
    var matches = str.match(/([a-z])\1+/gi);
    return matches ? true : false;
  },

  endsWithVowel: function (str) {
    var pattern = new RegExp('[aeiou]$', 'i');
    return pattern.test(str);
  },

  captureThreeNumbers: function (str) {
    var matches = str.match(/\d{3}/g);
    return matches ? matches[0] : false;
  },

  matchesPattern: function (str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },
  isUSD: function (str) {
    return /^\$(\d{1,3})+(,\d{3})*(\.\d{2})?$/.test(str);
  }
};
