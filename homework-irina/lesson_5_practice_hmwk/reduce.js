(function () {
    'use strict';
    var reduce = function(arr, callback, startValue) {
      var result = startValue;
      for (var i = 0; i < arr.length; i++) {
        result = callback.call(null,result, arr[i], i, arr);
      }
      return result;
    };
    window.reduce = reduce;
})();