function () {
    var prop = 'Symbol(PrimitivValue)'+ Date.New() ;
    var valueOf = function (){
        return this[prop] ;
    }
    window.setPrimitive = function(o,p){
        o[prop] = p ;
        o.valueOf = valueOf ;
    }
    window.changePrimitive = function(o,p) {
        o[prop] = p ;
    };
};
(function() {
    'use strict';
    var prop = 'Symbol(PrimitivValue)' + Math.random();
    var valueOf = function() {
        return this[prop];
    }
    window.setPrimitive = function(object, primitive) {
        object[prop] = primitive;
        object.valueOf = valueOf;
    };
    window.changePrimitive = function(object, primitive) {
        object[prop] = primitive;
    };
}());