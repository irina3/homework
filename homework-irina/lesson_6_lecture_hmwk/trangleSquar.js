function Point(x, y){
    this.x = x || 0;
    this.y = y || 0;
}
function Trangle(p1, p2, p3) {
    var d1 = p1.distansFrom(p2);
    var d2 = p2.distansFrom(p3);
    var d3 = p3.distansFrom(p1);
    if((d1 + d2 > d3) && (d2 + d3 > d1) && (d3 + d1 > 2)){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    }else{
        return 'incorct Trangle';
    }
}
Point.prototype.distansFrom = function(p){
    return Math.sqrt(Math.pow((this.x - p.x),2) + Math.pow((this.y - p.y),2));
}
Trangle.prototype.square = function() {
    var p = (this.d1 + this.d2 + this.d3)/2;
    return Math.sqrt(p * (p - this.d1) * (p - this.d2) * (p - this.d3));
    }
