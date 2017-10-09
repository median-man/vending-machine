/* This file contains all tests for code in vendingMachine.js. */
/* globals test */

// Tests for getChange function
test('getChange(1,1) should equal [] - an empty array', () => {
	const result = getChange(1,1); // no change
	const expected = [];
	assert.deepEqual(result, expected);
});

