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
	const result = getChange(215, 300);
	const expected = [50,20,10,5];
	assert.deepEqual(result, expected);
});

test('getChange(486, 600) should return [100, 10, 2, 2]', function() {
	const result = getChange(486, 600);
	const expected = [100, 10, 2, 2];
	assert.deepEqual(result, expected);
});

test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function() {
	const result = getChange(12, 400);
	const expected = [200, 100, 50, 20, 10, 5, 2, 1];
	assert.deepEqual(result, expected);
});
