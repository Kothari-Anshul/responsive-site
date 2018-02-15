/* function to check three digit number to be armstrong number or not*/
function is_armstrong(n){
	var result = 0;
	var copy = n;
	while(n > 0){
		digit = n%10;
		result += digit*digit*digit;
		n = Math.floor(n/10);
	}
	if(copy == result){
		document.write("Yes it is armstrong number" + "The number given to me was: " + copy);

	}else{
		document.write("No you are trying to fool me, it is not armstrong number. Please change it soon!");
	}
}
is_armstrong(153);