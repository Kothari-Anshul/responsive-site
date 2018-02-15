// the below function prints fibonacci numbers till n including n if it is
function fibonacci(n){
	var a = 1, b = 1;
	var c = 0;
	while(true){
		c = a + b;
		if(c > n){
			break;
		}
		document.write(c + "  ");
		a = b;
		b = c;
	}
}
fibonacci(20);