enComma = function(number) {

	number = String(number);
	return number.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

unComma = function(str) {

	str = String(str);
	return str.replace(/[^\d]+/g, '');
};