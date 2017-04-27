(function () {
    'use strict';
    function createEnum(argument) {
        argument = Object.create(argument);
            for (i in argument) {
                if (typeof argument[i] === 'object') {
                    var m = argument[i].name;
                    var n = argument[i].value;
                    Object.defineProperty(argument,m,{value : n, enumerable : true, writable : false, configurable:false});
                }else
                {
                    Object.defineProperty(argument,argument[i],{value : n+1, enumerable : true, writable : false,configurable:false});
                    i = argument[i];
                }
            }
        return argument;
    }
    window.createEnum=createEnum;
})();