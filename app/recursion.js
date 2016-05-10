exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    var self = this;
    var files = [];

    data.files.forEach(function (val, key) {
      if (dirName && data.dir !== dirName) {
        if (typeof val !== 'string') {
          files = files.concat(self.listFiles(val, dirName));
        }
      } else {
        if (typeof val === 'string') {
          files.push(val);
        } else {
          files = files.concat(self.listFiles(val));
        }
      }
    });

    return files;
  },

  permute: function (arr) {

  },

  fibonacci: function (n) {
    var val = arguments[1] || 1;
    var prev = arguments[2] || 0;
    if (n == 0) return prev;
    if (n == 1) return val;
    return this.fibonacci(n - 1, val + prev, val);
  },

  validParentheses: function (n) {

  }
};
