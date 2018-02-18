function is_palindrome(){
	var n = parseInt(document.getElementById("palin_num").value);
	var output = document.getElementById("is_palin");
	output.innerHTML = " ";
	var reverse = 0;
	var copy  = n;
	while(n > 0){
		digit = n%10;
		
		reverse = 10*reverse + digit;

		n = Math.floor(n/10);
	}
	
	if(reverse == copy){
		output.innerHTML = " "  + copy  + " ------> Kudos! it is palindrome ";
	}else {
		output.innerHTML = " " + copy+ "----->  Sorry! not a palindrome, try another one ";
	}
}
