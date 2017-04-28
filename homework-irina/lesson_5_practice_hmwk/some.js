(function () {
    'use strict';
    var some = function(arr, callback) {
      for (var i = 0; i < arr.length; i++) {
        if (callback.call(arr[i], i, arr)) {
          return true;
        }
      }
      return false;
    };
    window.some = some;
})();