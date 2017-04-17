(function (a,b,window) {
	function setPrimitive() {
		a=new Object(3);
		return a;
	}
    console.log(setPrimitive(window));
    console.log(a.valueOf());
	b=new Object('Symbol(PrimitiveValue)');
	function  changePrimitve() {
		a[b]=8;
		return a;
	}
    console.log(changePrimitve(window));
    console.log(a.valueOf());
}) (window);
