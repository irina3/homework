(function () {
    'use strict';
    var isArray = function(obj) {
        if (obj.constructor.name === 'Array') {
             return true;
        }
        return false;
    }        
    window.isArray = isArray;
})();