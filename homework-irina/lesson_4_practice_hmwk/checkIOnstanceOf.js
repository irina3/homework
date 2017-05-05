(function () {
    'use strict';
    var f=function(a,b){
        if (a.__proto__!= null){
            if (a.__proto__=== b.prototype){
                return true;
            } else 
            {
                return f((a.__proto__),b);
            }
        } 
        return false;
    }
    window.f=f;
})();