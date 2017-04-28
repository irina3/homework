(function () {
    'use strict';
    var reduceRight = function(arr, callback, startValue) {
      var result = startValue;
      for (var i = arr.length-1; i > 0; i--) {
        result = callback.call(null,result, arr[i], i, arr);
      }
      return result;
    };
    window.reduceRight = reduceRight;
})();