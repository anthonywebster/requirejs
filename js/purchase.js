function purchaseProduct (argument) {
	console.log("Function: purchaseProduct");

	var credits = getCredits();
	if (credits > 0) {
		reserverProduct();
		return true;
	}

	return false;
}