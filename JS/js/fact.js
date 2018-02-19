/*function factorial(){
	var n  = parseInt(document.getElementById("fact_num").value);
	var output = document.getElementById("is_fact");
	var f = 1;
	var i;
	for(i=n; i >=2; i--){
		f = f*i;
	}
	output.innerHTML = "Factorial of " + n + " is " + f;
}*/

function factorial(){
	var n  = parseInt(document.getElementById("fact_num").value);
	var output = document.getElementById("is_fact");
	const f = new Array(n+1).fill().map((a, i) => i).slice(1).reduce((acc, i) => {
		return acc * i;
	}, 1);

	output.innerHTML = "Factorial of " + n + " is " + f;
}
