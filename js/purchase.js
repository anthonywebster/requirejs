define(['credits','products'],function(credits,products){

	console.log("Function: purchaseProduct");
	return {

		purchaseProduct:function (argument) {

			var credits = getCredits();
			if (credits > 0) {
				products.reserverProduct();
				return true;
			}

			return false;
		}
	}
})
