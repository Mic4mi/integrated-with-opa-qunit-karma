// sap.ui.define(["acc/myproject/model/formatter", "sap/ui/thirdparty/sinon-4"
// ], function () {
// 	"use strict";

// 	var sandbox;

// 	QUnit.module("My QUnit tests", function (hooks) {

// 		hooks.before(function () {
// 			// Runs before all tests.
// 			sandbox = sinon.sandbox.create();
// 		});

// 		hooks.afterEach(function () {
// 			// Runs after each test.
// 			sandbox.restore();
// 		});

// 		QUnit.test("I should ...", function (assert) {
// 			//let spy = sandbox.spy("<placeholder>", "<placeholder>");
// 			//let stub = sandbox.stub("<placeholder>", "<placeholder>").returns(...);
// 			//let var mock = sandbox.mock(<placeholder);
// 			//https://sinonjs.org/
// 			//assert.equal(<actual result>, <expected result>, <optional message>);
// 			//assert.ok(<actual result>, <optional message>);
// 			assert.ok(false, "Implement me");
// 		});

// 		QUnit.test("Test an asynchrounous operation", function (assert) {
// 			//https://api.qunitjs.com/assert/async/
// 			var done = assert.async();
// 			// trigger asynchrous operation
// 			setTimeout(() => {
// 				assert.ok(false, "Implement me");
// 				done();
// 			});
// 		});

// 		QUnit.test("Test if a callback throws an exception", function (assert) {
// 			//https://api.qunitjs.com/assert/throws/
// 			assert.throws(() => {
// 				"text".reverse();
// 			}, TypeError, "function should have thrown TypeError");
// 		});

// 	});
// });

/*global QUnit*/

sap.ui.define([
	"acc/myproject/model/formatter"
], function (formatter) {
	"use strict";

	QUnit.module("Price State");

	function priceStateTestCase(oOptions) {
		// Act
		var sState = formatter.priceState(oOptions.price);

		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "The price state was correct");
	}

	QUnit.test("Should format the products with a price lower than 50 to Success", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 42,
			expected: "Success"
		});
	});

	QUnit.test("Should format the products with a price of 50 to Normal", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 50,
			expected: "None"
		});
	});

	QUnit.test("Should format the products with a price between 50 and 250 to Normal", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 112,
			expected: "None"
		});
	});

	QUnit.test("Should format the products with a price between 250 and 2000 to Warning", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 798,
			expected: "Warning"
		});
	});

	QUnit.test("Should format the products with a price higher than 2000 to Error", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 2001,
			expected: "Error"
		});
	});
});