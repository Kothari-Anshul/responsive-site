/* function to check three digit number to be armstrong number or not*/
function is_armstrong(){
	var input = document.getElementById("arm_num");
	var output = document.getElementById("is_arm");
	
	var n = parseInt(input.value);
	
	var result = 0;
	var copy = n;
	while(n > 0){
		digit = n%10;
		result += digit*digit*digit;
		n = Math.floor(n/10);
	}
	if(copy == result){
		output.innerHTML = "Yes it is armstrong number" + "The number given to me was: " + copy ;

	}else{
		output.innerHTML = "No , it is not armstrong number. Please change it soon!";
	}
}
