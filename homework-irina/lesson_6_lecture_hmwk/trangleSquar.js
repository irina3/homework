function Trangle(a, h) {
    this.a = a;
    this.h = h;
    this.square = function() {if (this.a <= 0 || this.h <=0){
            return 0;
        } else
        {
            return (this.a * this.h)/2;
        }
    };
}