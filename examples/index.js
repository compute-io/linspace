'use strict';

var linspace = require( './../lib' ),
	roundn = require( 'compute-roundn' ),
	out;

// Default behavior:
console.log( '\nDefault:' );
out = linspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify length:
console.log( '\nLength 10:' );
out = linspace( 0, 10, 10 );
console.log( out.join( '\n' ) );

console.log( '\nLength 11:' );
out = linspace( 0, 10, 11 );
console.log( out.join( '\n' ) );

console.log( '\nLength 21:' );
out = linspace( 0, 1, 21 );
console.log( out.join( '\n' ) );

// Account for floating point errors:
console.log( '\nLength 21 (roundn):' );
out = linspace( 0, 1, 21 );
roundn( out, -2 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
console.log( '\nDecremented values:' );
out = linspace( 10, 0, 11 );
console.log( out.join( '\n' ) );
