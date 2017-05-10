function Range(from, to) {
    this.from = from;
    this.to = to;
}
Rang.compare = function(r1, r2){
    var diff = (r1.to - r1.from) - (r2.to-r2.from);
    if (diff > 0) {
        return 1;
    }
    if (diff < 0){
        return -1;
    }
    return 0;
}
Range.prototype.compare = function(range){
    return Range.compare(this.range);
};
Range.prototype.gt = function(rang){
        return this.compare(range) > 0;
};
Range.prototype.gte = function(rang){
    return this.compare(range) >= 0;
};
Range.prototype.lt = function(rang){
    return this.compare(range) < 0;
};
Range.prototype.lte = function(rang){
    return this.compare(range) <= 0;
};
r1 = new Range(10, 11);
r2 = new Range(5, 9);
r1.gte(r2, function(arg1, arg2){
    var diff = arg1 - arg2;
    if (diff > 0) {
        return 1;
    }
    if (diff < 0) {
        return -1;
    }
    return 0;
})