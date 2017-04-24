(function () {
    'use strict';
    function getRandomInt(max) {
        var int=parseInt((Math.random() * max));
        return int;
    }
    window.getRandomInt = getRandomInt;
})();