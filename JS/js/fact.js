function factorial(n){
	var f = 1;
	var i;
	for(i=n; i >=2; i--){
		f = f*i;
	}
	document.write("Factorial of " + n + " is " + f);
}
factorial(5);