function() {
    var prop="Symbol(PrimitivValue)"+ Date.New();
    var valueOf=function(){
        return this[prop];
    }
    window.setPrimitive=function(o,p){
        o[prop]=p;
        o.valueOf=valueOf;
    }
    window.changePrimitive = function(o,p) {
        o[prop]=p;
    };
};