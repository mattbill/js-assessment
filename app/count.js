exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    var curr = start;

    function countFunc() {
      console.log(curr);
      curr++;
      if (curr > end) {
        clearInterval(loop);
      }
    }

    function cancel() {
      clearInterval(loop);
    }

    var loop = setInterval(countFunc, 100);
    countFunc();

    return {
      cancel: cancel
    }
  }
};
