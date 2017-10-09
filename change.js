function getChange (totalPayable, cashPaid) {
	const coins = [200, 100, 50, 20, 10, 5, 2, 1];
	const change = [];
	let diff = cashPaid - totalPayable;

	// while the difference between the amount paid and the total due is
	// greater than 0, find the largest denomination which is less than
	// the difference. Add the value of the denomination to change and
	// subtract it from diff.
	while (diff > 0) {
		let coin = coins.find( val => { return val <= diff; });
		change.push(coin);
		diff -= coin;
	}

	return change;
}
