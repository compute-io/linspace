/**
*
*	COMPUTE: linspace
*
*
*	DESCRIPTION:
*		- Generates a linearly spaced numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' );


// LINSPACE //

/**
* FUNCTION: linspace( start, stop[, length] )
*	Generates a linearly spaced numeric array.
*
* @param {Number} start - first array value
* @param {Number} stop - last array value
* @param {Number} [length] - length of output array
* @returns {Array} linearly spaced numeric array
*/
function linspace( x1, x2, len ) {
	var arr,
		end,
		tmp,
		d;

	if ( typeof x1 !== 'number' || x1 !== x1 ) {
		throw new TypeError( 'linspace()::invalid input argument. Start must be numeric.' );
	}
	if ( typeof x2 !== 'number' || x2 !== x2 ) {
		throw new TypeError( 'linspace()::invalid input argument. Stop must be numeric.' );
	}
	if ( arguments.length < 3 ) {
		len = 100;
	} else {
		if ( !isInteger( len ) || len < 0 ) {
			throw new TypeError( 'linspace()::invalid input argument. Length must be a positive integer.' );
		}
		if ( len === 0 ) {
			return [];
		}
	}
	// Calculate the increment:
	end = len - 1;
	d = ( x2-x1 ) / end;

	// Build the output array...
	arr = new Array( len );
	tmp = x1;
	arr[ 0 ] = tmp;
	for ( var i = 1; i < end; i++ ) {
		tmp += d;
		arr[ i ] = tmp;
	}
	arr[ end ] = x2;
	return arr;
} // end FUNCTION linspace()


// EXPORTS //

module.exports = linspace;
