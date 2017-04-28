(function () {
    'use strict';
    var every = function(arr, callback) {
      for (var i = 0; i < arr.length; i++) {
        if (!callback.call(arr[i], i, arr)) {
          return false;
        }
      }
      return true;
    };
    window.every = every;
})();