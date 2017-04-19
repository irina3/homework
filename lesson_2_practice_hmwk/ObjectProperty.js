(function() {
    var a={};
    window.setPrimitive = function(a , primitive) {
    	a=new Object(primitive)
        return a.valueOf();
    };
    window.changePrimitive = function(a , primitive) {
    	a=new Object(primitive);
        return a.valueOf();
    };
})();