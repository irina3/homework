(function () {
    'use strict';
    function indexOf (a,x) {
        for ( var i = 0; i < a.length; i++ ) {
            if ( a[i] === x ) {
                return i;
            }
        }
        return -1;
    }
    window.indexOf=indexOf;
})();