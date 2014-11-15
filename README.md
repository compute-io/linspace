linspace
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Generates a linearly spaced numeric array.


## Installation

``` bash
$ npm install compute-linspace
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var linspace = require( 'compute-linspace' );
```

#### linspace( start, stop[, length] )

Generates a linearly spaced numeric `array`. If a `length` is not provided, the default output `array` length is `100`.

``` javascript
var arr = linspace( 0, 100, 6 );
// returns [ 0, 20, 40, 60, 80, 100 ]
```


## Notes

The output `array` is guaranteed to include the `start` and `end` values. Beware, however, that values between the `start` and `end` are subject to floating point errors. Hence,

``` javascript
var arr = linspace( 0, 1, 3 );
// returns [ 0, ~0.5, 1 ]
```

where `arr[1]` is only guaranteed to be approximately equal to `0.5`. If you desire more control over element precision, consider using [compute-roundn](https://github.com/compute-io/roundn):

``` javascript
var roundn = require( 'compute-roundn' );

// Create an array subject to floating point errors:
var arr = linspace( 0, 1, 21 );

// Round each value to the nearest hundredth:
roundn( arr, -2 );

console.log( arr.join( '\n' ) );
```


This function is inspired by MATLAB's [linspace](http://www.mathworks.com/help/matlab/ref/linspace.html).


## Examples

``` javascript
var linspace = require( 'compute-linspace' ),
	out;

// Default behavior:
out = linspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify length:
out = linspace( 0, 10, 10 );
console.log( out.join( '\n' ) );

out = linspace( 0, 10, 11 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
out = linspace( 10, 0, 11 );
console.log( out.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-linspace.svg
[npm-url]: https://npmjs.org/package/compute-linspace

[travis-image]: http://img.shields.io/travis/compute-io/linspace/master.svg
[travis-url]: https://travis-ci.org/compute-io/linspace

[coveralls-image]: https://img.shields.io/coveralls/compute-io/linspace/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/linspace?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/linspace.svg
[dependencies-url]: https://david-dm.org/compute-io/linspace

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/linspace.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/linspace

[github-issues-image]: http://img.shields.io/github/issues/compute-io/linspace.svg
[github-issues-url]: https://github.com/compute-io/linspace/issues
