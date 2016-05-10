exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    var deferred = $.Deferred(function (defer) {
      setTimeout(function () {
        defer.resolve(value);
      });
    });
    return deferred.promise();
  },

  manipulateRemoteData: function (url) {
    return $.ajax({
      url: url,
      method: 'GET'
    }).then(function (results) {
      var sortedNames = _.pluck(results.people, 'name').sort();
      var deferred = $.Deferred();
      return deferred.resolve(sortedNames).promise();
    });
  }
};
