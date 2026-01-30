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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Continuous Uniform

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Continuous uniform distribution.



<section class="usage">

## Usage

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform@v0.3.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { Uniform, cdf, entropy, kurtosis, logcdf, logpdf, mean, median, mgf, pdf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform@v0.3.0-esm/index.mjs';
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
var Uniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform' ).Uniform;

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform@v0.3.0-esm/index.mjs';

/*
Let's consider an example where we are modeling the arrival times of guests
at a reception event that runs from 6:00 PM to 8:00 PM, where each arrival
within this 2-hour window is equally likely. We can model this scenario using a
continuous  uniform distribution with a minimum value of 0 (6:00 PM) and
a maximum value of 120 (8:00 PM).
*/

var min = 0.0; // 6:00 PM is 0 minutes after 6:00 PM.
var max = 120.0; // 8:00 PM is 120 minutes after 6:00 PM.

var mean = uniform.mean( min, max );
// returns 60.0

var variance = uniform.variance( min, max );
// returns 1200.0

var stdDev = uniform.stdev( min, max );
// returns ~34.641

var entropy = uniform.entropy( min, max );
// returns ~4.787

// Probability of arrival within 30 minutes after 6:00 PM:
var p = uniform.cdf( 30, min, max );
// returns 0.25

// Evaluate the PDF at 30 minutes after 6:00 PM:
var pdf = uniform.pdf( 30, min, max );
// returns ~0.0083

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-uniform.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-uniform

[test-image]: https://github.com/stdlib-js/stats-base-dists-uniform/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-uniform/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-uniform/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-uniform?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-uniform.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-uniform/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-uniform/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-uniform/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-uniform/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-uniform/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-uniform/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-uniform/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-uniform/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-uniform/main/LICENSE

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

<!-- <toc-links> -->

[@stdlib/stats/base/dists/uniform/ctor]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/tree/esm

[@stdlib/stats/base/dists/uniform/entropy]: https://github.com/stdlib-js/stats-base-dists-uniform-entropy/tree/esm

[@stdlib/stats/base/dists/uniform/kurtosis]: https://github.com/stdlib-js/stats-base-dists-uniform-kurtosis/tree/esm

[@stdlib/stats/base/dists/uniform/mean]: https://github.com/stdlib-js/stats-base-dists-uniform-mean/tree/esm

[@stdlib/stats/base/dists/uniform/median]: https://github.com/stdlib-js/stats-base-dists-uniform-median/tree/esm

[@stdlib/stats/base/dists/uniform/skewness]: https://github.com/stdlib-js/stats-base-dists-uniform-skewness/tree/esm

[@stdlib/stats/base/dists/uniform/stdev]: https://github.com/stdlib-js/stats-base-dists-uniform-stdev/tree/esm

[@stdlib/stats/base/dists/uniform/variance]: https://github.com/stdlib-js/stats-base-dists-uniform-variance/tree/esm

[@stdlib/stats/base/dists/uniform/cdf]: https://github.com/stdlib-js/stats-base-dists-uniform-cdf/tree/esm

[@stdlib/stats/base/dists/uniform/logcdf]: https://github.com/stdlib-js/stats-base-dists-uniform-logcdf/tree/esm

[@stdlib/stats/base/dists/uniform/logpdf]: https://github.com/stdlib-js/stats-base-dists-uniform-logpdf/tree/esm

[@stdlib/stats/base/dists/uniform/mgf]: https://github.com/stdlib-js/stats-base-dists-uniform-mgf/tree/esm

[@stdlib/stats/base/dists/uniform/pdf]: https://github.com/stdlib-js/stats-base-dists-uniform-pdf/tree/esm

[@stdlib/stats/base/dists/uniform/quantile]: https://github.com/stdlib-js/stats-base-dists-uniform-quantile/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
