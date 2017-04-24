(function () {
    'use strict';
    function isObject(a) {
        return a && typeof a === 'object';
    }
    function includes(a,b) {
        for (var i in a) {
            if (!equals (a[i]), b[i])) {
                return false;
            }
        }
        return true;
    }
    function equals(arg1, arg2) {
        if (arg1 === arg2){
            return true;
        }
        if (!isObject(arg1) || !isObject(arg2)){
            return false;
        }
        return includes(a,b)  && includes(b,a);
    }
    window.equals = equals;
})();