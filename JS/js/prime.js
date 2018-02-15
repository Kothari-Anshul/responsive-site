function print_prime(n){
	var i;
	for(i = 2; i<=n; i++){
		if(is_prime(i)){
			document.write(i);
			document.write(" ");
		}
	}
}
function is_prime(a){
	
	var i;
	for(i=2; i<=a/2; i++){
		if(a%i == 0){
			return false;
		}
	}
	return true;
}
print_prime(10);