function print_prime(){
	var n = parseInt(document.getElementById("prime_num").value);
	var output = document.getElementById("is_prime");
	output.innerHTML = " "; 
	var i;
	for(i = 2; i<=n; i++){
		if(is_prime(i)){
			output.innerHTML += i;
			output.innerHTML += " ";
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
