(function () {
    'use strict';
    function createEnum(arg) {
        argu = Object.create(argument);
            for (i in arg) {
                if (typeof arg[i] === 'object') {
                    var m = arg[i].name;
                    var n = arg[i].value;
                    Object.defineProperty(arg,m,{value : n, enumerable : true, writable : false, configurable:false});
                }else
                {
                    Object.defineProperty(arg,arg[i],{value : n+1, enumerable : true, writable : false,configurable:false});
                    i = arg[i];
                }
            }
        return arg;
    }
    window.createEnum=createEnum;
})();