exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    var sum = 0;
    arr.forEach(function (val, idx) {
      sum += val;
    });
    return sum;
  },

  remove: function (arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy: function (arr, item) {
    var idx = 0;
    do {
      if (arr[idx] === item) {
        arr.splice(idx, 1);
      } else {
        idx++;
      }

    } while (idx < arr.length);
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var count = 0;
    arr.forEach(function (val, idx) {
      count = val === item ? count + 1 : count;
    });
    return count;
  },

  duplicates: function (arr) {
    var temp = [],
      dupes = [];
    arr.forEach(function (val) {
      if (temp.indexOf(val) == -1) {
        temp.push(val);
      } else if (dupes.indexOf(val) == -1) {
        dupes.push(val);
      }
    });
    return dupes;
  },

  square: function (arr) {
    return arr.map(function (val) {
      return val * val;
    });
  },

  findAllOccurrences: function (arr, target) {
    var answer = [];
    arr.forEach(function (val, idx) {
      if (val === target) {
        answer.push(idx);
      }
    });
    return answer;
  }
};
