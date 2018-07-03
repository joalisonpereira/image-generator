"use strict";

var array = [1, 2, 3, 4, 5];

function sum() {
	for (var _len = arguments.length, z = Array(_len), _key = 0; _key < _len; _key++) {
		z[_key] = arguments[_key];
	}

	return z.reduce(function (total, index) {
		return total += index;
	});
}

console.log(sum(array));
