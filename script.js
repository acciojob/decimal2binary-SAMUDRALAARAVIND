function decimalToBinary(num) {
	let binary = "" ;
	while(num >= 2) {
		binary =  (num % 2) + binary;
		num = parseInt(num / 2);
	}
	if(num === 1) {
		return num + binary;
	}
	return binary ;
}

window.decimalToBinary = decimalToBinary;