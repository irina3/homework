function Range(from,to){
    this.from = from;
    this.to = to;
}
Range.prototype.includes = function(p){
    return p >= this.from && p <= this.to;
}
