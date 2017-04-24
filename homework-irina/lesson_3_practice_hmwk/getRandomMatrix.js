(function () {
    'use strict';
    function getRandomInt(max) {
        var int = parseInt ((Math.random() * max));
        return int;
    }
    window.getRandomInt = getRandomInt;
})();
(function () {
    'use strict';
    function getRandomArray (size) {
        var arr = new Array(size);
        for (var i = 0; i < size; i++){
            arr[i] = getRandomInt(100);
        }
        return arr;
    }
    function getRandomMatrix (m,n) {
        var arr = new Array(n);
        for (var i = 0 ; i < n ; i++) {
            arr[i] = getRandomArray(m);
        }
        return arr;
    }
    window.getRandomMatrix = getRandomMatrix;
})();