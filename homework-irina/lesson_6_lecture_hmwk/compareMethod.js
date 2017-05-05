function Range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prototype.gt = function(rang){
    if (this.to - this.from > rang.to - rang.from){
        return true;
    }
    return false;
};
Range.prototype.gte = function(rang){
    if (this.to - this.from > =rang.to - rang.from){
        return true;
    }
    return false;
};
Range.prototype.lt = function(rang){
    if (this.to - this.from < rang.to - rang.from){
        return true;
    }
    return false;
};
Range.prototype.lte = function(rang){
    if (this.to - this.from < = rang.to - rang.from){
        return true;
    }
    return false;
};