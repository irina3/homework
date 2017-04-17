var a={};
var b=new Object('Symbol(PrimitiveValue)');
    a[b]=5;
    a.valueOf();
    console.log(a);