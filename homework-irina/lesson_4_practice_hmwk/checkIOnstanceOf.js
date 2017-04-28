(function () {
    'use strict';
    var f=function(a){
        if (a.__proto__!= null){
            if (a.__proto__=== (typeof a).prototype){
                return true;
            } else if(f(a.__proto__).__proto__===(typeof a).prototype){
                    return true;
            }
        } 
        return false;
    }
})();