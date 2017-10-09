/* This file contains all tests for code in vendingMachine.js. */
/* globals QUnit getChange */

const { assert, test } = QUnit;

// Tests for getChange function
test('getChange(1,1) should equal [] - an empty array', () => {
	const result = getChange(1, 1); // no change
	const expected = [];
	assert.deepEqual(result, expected);
});

test('getChange(215, 300) should return [50, 20, 10, 5]', function() {
	const result = getChange(215, 300); // no change
	const expected = [50,20,10,5];
	assert.deepEqual(result, expected);
});
