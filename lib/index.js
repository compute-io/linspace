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
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );

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

	if ( !isNumber( x1 ) ) {
		throw new TypeError( 'linspace()::invalid input argument. Start must be numeric. Value: `' + x1 + '`.' );
	}
	if (  !isNumber( x2 ) ) {
		throw new TypeError( 'linspace()::invalid input argument. Stop must be numeric. Value: `' + x2 + '`.' );
	}
	if ( arguments.length < 3 ) {
		len = 100;
	} else {
		if ( !isNonNegativeInteger( len ) ) {
			throw new TypeError( 'linspace()::invalid input argument. Length must be a positive integer.  Value: `' + len + '`.' );
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
