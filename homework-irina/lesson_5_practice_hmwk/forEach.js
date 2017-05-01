(function () {
    'use strict';
    var forEach = function(arr, callback) {
        for (i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    };
})();