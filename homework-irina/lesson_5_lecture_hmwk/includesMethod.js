function Range(x,y){
    this.x = x;
    this.y = y;
}
Range.prototype.includes = function(p){
    return p > this.x && p < this.y;
}
var a = new Range(2, 8);
var b = new Range(5, 15);
console.log(a.includes(4));