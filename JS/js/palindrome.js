function is_palindrome(n){
	var reverse = 0;
	var copy  = n;
	while(n > 0){
		digit = n%10;
		
		reverse = 10*reverse + digit;

		n = Math.floor(n/10);
	}
	
	if(reverse == copy){
		document.write(" "  + copy  + " ------> Kudos! it is palindrome ");
	}else {
		document.write(" " + copy+ "----->  Sorry! not a palindrome, try another one ");
	}
}
is_palindrome(55);