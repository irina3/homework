function Range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prrototype.gt = function(rang){
    if (this.to - this.from > rang.to - rang.from){
        return true;
    }
    return false;
};
Range.prrototype.gte = function(rang){
    if (this.to - this.from > =rang.to - rang.from){
        return true;
    }
    return false;
};
Range.prrototype.lt = function(rang){
    if (this.to - this.from < rang.to - rang.from){
        return true;
    }
    return false;
};
Range.prrototype.lte = function(rang){
    if (this.to - this.from < = .to - rang.from){
        return true;
    }
    return false;
};