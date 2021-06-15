<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Continuous Uniform

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Continuous uniform distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-uniform
```

</section>

<section class="usage">

## Usage

```javascript
var uniform = require( '@stdlib/stats-base-dists-uniform' );
```

#### uniform

Continuous uniform distribution.

```javascript
var dist = uniform;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b )`][@stdlib/stats/base/dists/uniform/cdf]</span><span class="delimiter">: </span><span class="description">uniform distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b )`][@stdlib/stats/base/dists/uniform/logcdf]</span><span class="delimiter">: </span><span class="description">uniform distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, a, b )`][@stdlib/stats/base/dists/uniform/logpdf]</span><span class="delimiter">: </span><span class="description">uniform distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, a, b )`][@stdlib/stats/base/dists/uniform/mgf]</span><span class="delimiter">: </span><span class="description">uniform distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, a, b )`][@stdlib/stats/base/dists/uniform/pdf]</span><span class="delimiter">: </span><span class="description">uniform distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, a, b )`][@stdlib/stats/base/dists/uniform/quantile]</span><span class="delimiter">: </span><span class="description">uniform distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b )`][@stdlib/stats/base/dists/uniform/entropy]</span><span class="delimiter">: </span><span class="description">uniform distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( a, b )`][@stdlib/stats/base/dists/uniform/kurtosis]</span><span class="delimiter">: </span><span class="description">uniform distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b )`][@stdlib/stats/base/dists/uniform/mean]</span><span class="delimiter">: </span><span class="description">uniform distribution expected value.</span>
-   <span class="signature">[`median( a, b )`][@stdlib/stats/base/dists/uniform/median]</span><span class="delimiter">: </span><span class="description">uniform distribution median.</span>
-   <span class="signature">[`skewness( a, b )`][@stdlib/stats/base/dists/uniform/skewness]</span><span class="delimiter">: </span><span class="description">uniform distribution skewness.</span>
-   <span class="signature">[`stdev( a, b )`][@stdlib/stats/base/dists/uniform/stdev]</span><span class="delimiter">: </span><span class="description">uniform distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b )`][@stdlib/stats/base/dists/uniform/variance]</span><span class="delimiter">: </span><span class="description">uniform distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [continuous uniform][uniform-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Uniform( [a, b] )`][@stdlib/stats/base/dists/uniform/ctor]</span><span class="delimiter">: </span><span class="description">uniform distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Uniform = require( '@stdlib/stats-base-dists-uniform' ).Uniform;

var dist = new Uniform( 2.0, 4.0 );

var y = dist.cdf( 2.5 );
// returns 0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var uniform = require( '@stdlib/stats-base-dists-uniform' );

console.log( objectKeys( uniform ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-uniform.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-uniform

[test-image]: https://github.com/stdlib-js/stats-base-dists-uniform/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-uniform/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-uniform/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-uniform?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-uniform
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-uniform/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-uniform/main/LICENSE

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

<!-- <toc-links> -->

[@stdlib/stats/base/dists/uniform/ctor]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor

[@stdlib/stats/base/dists/uniform/entropy]: https://github.com/stdlib-js/stats-base-dists-uniform-entropy

[@stdlib/stats/base/dists/uniform/kurtosis]: https://github.com/stdlib-js/stats-base-dists-uniform-kurtosis

[@stdlib/stats/base/dists/uniform/mean]: https://github.com/stdlib-js/stats-base-dists-uniform-mean

[@stdlib/stats/base/dists/uniform/median]: https://github.com/stdlib-js/stats-base-dists-uniform-median

[@stdlib/stats/base/dists/uniform/skewness]: https://github.com/stdlib-js/stats-base-dists-uniform-skewness

[@stdlib/stats/base/dists/uniform/stdev]: https://github.com/stdlib-js/stats-base-dists-uniform-stdev

[@stdlib/stats/base/dists/uniform/variance]: https://github.com/stdlib-js/stats-base-dists-uniform-variance

[@stdlib/stats/base/dists/uniform/cdf]: https://github.com/stdlib-js/stats-base-dists-uniform-cdf

[@stdlib/stats/base/dists/uniform/logcdf]: https://github.com/stdlib-js/stats-base-dists-uniform-logcdf

[@stdlib/stats/base/dists/uniform/logpdf]: https://github.com/stdlib-js/stats-base-dists-uniform-logpdf

[@stdlib/stats/base/dists/uniform/mgf]: https://github.com/stdlib-js/stats-base-dists-uniform-mgf

[@stdlib/stats/base/dists/uniform/pdf]: https://github.com/stdlib-js/stats-base-dists-uniform-pdf

[@stdlib/stats/base/dists/uniform/quantile]: https://github.com/stdlib-js/stats-base-dists-uniform-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
