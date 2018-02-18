// the below function prints fibonacci numbers till n including n if it is
function fibonacci(){
	var n = parseInt(document.getElementById("fibo_num").value);
	var output = document.getElementById("is_fibo");
	var a = 1, b = 1;
	var c = 0;
	while(true){
		c = a + b;
		if(c > n){
			break;
		}
		output.innerHTML += c + "  ";
		a = b;
		b = c;
	}
}
