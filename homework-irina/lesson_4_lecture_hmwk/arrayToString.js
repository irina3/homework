function arrayToString(array,f) {
    var t = Array.prototype.map.call(array,f);
        t = t.join('');
        t = t.toString();
        return t;
}
var f=function(v){
    return v+"-"
}
