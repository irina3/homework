(function () {
    'use strict';
    var filter = function(arr, callback) {
      var  results = [];
      for (var i = 0; i < arr.length; i++{
        if (callback.call( arr[i], i, arr)) {
          results.push(arr[i]);
        }
      }
      return results;
    };
    window.filter = filter;
})();