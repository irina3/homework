(function () {
    'use strict';
        var map = function(arr, callback) {
            var results = [];
             for (var i = 0; i < arr.length; i++) {
                 results.push(callback.call(arr[i], i, arr));
            }
            return results;
        };
        window.map = map;
    })();