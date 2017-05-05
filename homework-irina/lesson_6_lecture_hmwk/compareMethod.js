function Range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prrototype.compare = function(rang){
    if (this.to - this.from > rang.to - rang.from){
        return 1;
    }
    if (this.to - this.from < rang.to - rang.from){
        return -1;
    }
    return 0;
};
