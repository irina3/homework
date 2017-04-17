function Guid(){

	return Math.random().toString(16).slice(2, 10)+"-"+Math.random().toString(16).slice(2, 6)+"-"+Math.random().toString(16).slice(2, 6)+"-"+Math.random().toString(16).slice(2, 6)+"-"+Math.random().toString(16).slice(2, 14)
}
