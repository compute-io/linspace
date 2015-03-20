/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	linspace = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-linspace', function tests() {

	it( 'should export a function', function test() {
		expect( linspace ).to.be.a( 'function' );
	});

	it( 'should throw an error if the `start` value is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				linspace( value, 10 );
			};
		}
	});

	it( 'should throw an error if the `stop` value is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				linspace( 0, value );
			};
		}
	});

	it( 'should throw an error if the `length` is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				linspace( 0, 10, value );
			};
		}
	});

	it( 'should return a linearly spaced array', function test() {
		var start, stop, expected, actual;

		start = 0;
		stop = 10;

		// Default behavior:
		actual = linspace( start, stop );
		assert.strictEqual( actual.length, 100 );
		assert.strictEqual( actual[0], start );
		assert.strictEqual( actual[actual.length-1], 10 );

		// Specify the length:
		actual = linspace( start, stop, 10 );
		assert.strictEqual( actual.length, 10 );
		assert.strictEqual( actual[0], start );
		assert.strictEqual( actual[actual.length-1], 10 );

		// Verify correct values:
		actual = linspace( start, stop, 11 );
		expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

		assert.deepEqual( actual, expected );

		// Decrement:
		actual = linspace( stop, start, 11 );
		expected = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array is length is set to 0', function test() {
		assert.deepEqual( linspace(0,10,0), [] );
	});

});
