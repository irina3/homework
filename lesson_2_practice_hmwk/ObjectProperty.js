(function () {
    var a = {};
        function setPrimitive(n){
            a.x=n;
            a.valueOf = valueOf;
            return a.valueOf();
        }
    var valueOf = function() {
        return this.x;
    };
        function changePrimitive(m){
            a = {
            x: m,
            valueOf: valueOf
            }
            return a.valueOf(); 
        }
console.log(setPrimitive(500));
console.log(changePrimitive('hhh'));
})()