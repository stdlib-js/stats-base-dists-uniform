# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-12-29)

<section class="features">

### Features

-   [`c5f6c77`](https://github.com/stdlib-js/stdlib/commit/c5f6c77e86a0b8dde6d85a40135e2a1d46742797) - add C implementation for `stats/base/dists/uniform/skewness`
-   [`1097586`](https://github.com/stdlib-js/stdlib/commit/10975869f1190573540cd482ff16b23d2e44f7e5) - add C implementation for `stats/base/dists/uniform/cdf` [(#3959)](https://github.com/stdlib-js/stdlib/pull/3959)
-   [`bc90eba`](https://github.com/stdlib-js/stdlib/commit/bc90ebaf8e8318423f84cf652e1003836e898ab4) - add C implementation for `stats/base/dists/uniform/mgf` [(#4142)](https://github.com/stdlib-js/stdlib/pull/4142)
-   [`d9c5d0c`](https://github.com/stdlib-js/stdlib/commit/d9c5d0c3343a0d0354d90d57f39638183bf3f51d) - add C implementation for `stats/base/dists/uniform/stdev` [(#4133)](https://github.com/stdlib-js/stdlib/pull/4133)
-   [`f0a9789`](https://github.com/stdlib-js/stdlib/commit/f0a978990a4e4cb1598203dd9b7a3e73665e82cd) - add C implementation for `stats/base/dists/uniform/quantile` [(#4143)](https://github.com/stdlib-js/stdlib/pull/4143)
-   [`e5880d1`](https://github.com/stdlib-js/stdlib/commit/e5880d18a941b1bb088cf9d55ee3e39a20e21938) - add C implementation for `stats/base/dists/uniform/logcdf` [(#4140)](https://github.com/stdlib-js/stdlib/pull/4140)
-   [`ac38037`](https://github.com/stdlib-js/stdlib/commit/ac3803778a758e68a576b497479babbfbafde973) - add C implementation for `stats/base/dists/uniform/logpdf` [(#4141)](https://github.com/stdlib-js/stdlib/pull/4141)
-   [`0806d8d`](https://github.com/stdlib-js/stdlib/commit/0806d8dd46ea52f7e95c12b1add6b3e01745711b) - add C implementation for `stats/base/dists/uniform/kurtosis` [(#4132)](https://github.com/stdlib-js/stdlib/pull/4132)
-   [`1aa67dd`](https://github.com/stdlib-js/stdlib/commit/1aa67ddd1e238c681c845626c20b5377bd5e35aa) - add C implementation for `stats/base/dists/uniform/median` [(#3970)](https://github.com/stdlib-js/stdlib/pull/3970)
-   [`293cd1a`](https://github.com/stdlib-js/stdlib/commit/293cd1a2427ab5861d145f01c54c9c740048b438) - add C implementation for `stats/base/dists/uniform/mean` [(#3964)](https://github.com/stdlib-js/stdlib/pull/3964)
-   [`4d6fbbd`](https://github.com/stdlib-js/stdlib/commit/4d6fbbd6ec73ee9d0ccb3bba1869f34d184329dd) - add C implementation for `stats/base/dists/uniform/entropy` [(#4021)](https://github.com/stdlib-js/stdlib/pull/4021)
-   [`27824a1`](https://github.com/stdlib-js/stdlib/commit/27824a1f3c90218cfe5f3be923f8f879d98ed9dc) - add C implementation for `stats/base/dists/uniform/pdf` [(#3949)](https://github.com/stdlib-js/stdlib/pull/3949)
-   [`930ed98`](https://github.com/stdlib-js/stdlib/commit/930ed98207b9ae67f00b23917755589dbbd03fe5) - add C implementation for `stats/base/dists/uniform/variance` [(#3951)](https://github.com/stdlib-js/stdlib/pull/3951)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`dc9cbad`](https://github.com/stdlib-js/stdlib/commit/dc9cbadc23ddabb54f00fc1d304c93e95fb3d88a) - remove unused `sqrt` dependency from `uniform/stdev` manifest
-   [`d440f55`](https://github.com/stdlib-js/stdlib/commit/d440f556cf0ede9dd6edec070cb8fd0e1e60874d) - remove unused includes

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 17 issues were closed in this release:

[#3825](https://github.com/stdlib-js/stdlib/issues/3825), [#3826](https://github.com/stdlib-js/stdlib/issues/3826), [#3827](https://github.com/stdlib-js/stdlib/issues/3827), [#3828](https://github.com/stdlib-js/stdlib/issues/3828), [#3829](https://github.com/stdlib-js/stdlib/issues/3829), [#3830](https://github.com/stdlib-js/stdlib/issues/3830), [#3831](https://github.com/stdlib-js/stdlib/issues/3831), [#3832](https://github.com/stdlib-js/stdlib/issues/3832), [#3833](https://github.com/stdlib-js/stdlib/issues/3833), [#3834](https://github.com/stdlib-js/stdlib/issues/3834), [#3836](https://github.com/stdlib-js/stdlib/issues/3836), [#3837](https://github.com/stdlib-js/stdlib/issues/3837), [#4991](https://github.com/stdlib-js/stdlib/issues/4991), [#5231](https://github.com/stdlib-js/stdlib/issues/5231), [#5233](https://github.com/stdlib-js/stdlib/issues/5233), [#5304](https://github.com/stdlib-js/stdlib/issues/5304), [#5903](https://github.com/stdlib-js/stdlib/issues/5903)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`14fbe2a`](https://github.com/stdlib-js/stdlib/commit/14fbe2a5ced542c4183b6cae8a5d369462a6023a) - **docs:** clean-up TypeScript declarations example code _(by Philipp Burckhardt)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`4589cee`](https://github.com/stdlib-js/stdlib/commit/4589cee4e69b2a4c4a433321f413824a69eebb6e) - **docs:** fix return annotation values _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`8ea46b6`](https://github.com/stdlib-js/stdlib/commit/8ea46b662dc6e27231d250d101e33a3cf770cd77) - **test:** update descriptions to match language used in JS tests _(by Philipp Burckhardt)_
-   [`c5f6c77`](https://github.com/stdlib-js/stdlib/commit/c5f6c77e86a0b8dde6d85a40135e2a1d46742797) - **feat:** add C implementation for `stats/base/dists/uniform/skewness` _(by Philipp Burckhardt)_
-   [`dc9cbad`](https://github.com/stdlib-js/stdlib/commit/dc9cbadc23ddabb54f00fc1d304c93e95fb3d88a) - **fix:** remove unused `sqrt` dependency from `uniform/stdev` manifest _(by Philipp Burckhardt)_
-   [`d440f55`](https://github.com/stdlib-js/stdlib/commit/d440f556cf0ede9dd6edec070cb8fd0e1e60874d) - **fix:** remove unused includes _(by Philipp Burckhardt)_
-   [`321490b`](https://github.com/stdlib-js/stdlib/commit/321490b2c4b3de26ca049685f433230a75d648ed) - **test:** align test descriptions between main and native test files _(by Philipp Burckhardt)_
-   [`20dd4e8`](https://github.com/stdlib-js/stdlib/commit/20dd4e891d7fac27581eecb54240ae194d6076ab) - **test:** add missing skips for native add-on tests _(by Philipp Burckhardt)_
-   [`8948bbc`](https://github.com/stdlib-js/stdlib/commit/8948bbcc14500981b8e617ed5c2bfe4d0384a93c) - **chore:** address commit comments for commit `f6829da` [(#6769)](https://github.com/stdlib-js/stdlib/pull/6769) _(by Devshree Bhati, Philipp Burckhardt)_
-   [`4760d21`](https://github.com/stdlib-js/stdlib/commit/4760d213de7e085a75510d02f65f1c3fdd12b90c) - **docs:** fix C Doxygen return tag _(by Philipp Burckhardt)_
-   [`d7721ac`](https://github.com/stdlib-js/stdlib/commit/d7721acc432ec419630e74bb49db5ccccc3cd1d5) - **docs:** fix C example code _(by Philipp Burckhardt)_
-   [`1097586`](https://github.com/stdlib-js/stdlib/commit/10975869f1190573540cd482ff16b23d2e44f7e5) - **feat:** add C implementation for `stats/base/dists/uniform/cdf` [(#3959)](https://github.com/stdlib-js/stdlib/pull/3959) _(by Divyansh Seth, Philipp Burckhardt, stdlib-bot)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`fb2046c`](https://github.com/stdlib-js/stdlib/commit/fb2046c940281d6d0fed98d979d17caee0bd3107) - **test:** fix missing argument _(by Athan Reines)_
-   [`f6829da`](https://github.com/stdlib-js/stdlib/commit/f6829da93ff5ed53f07365ce1b2ce8303a5f517a) - **chore:** address commit comments [(#5320)](https://github.com/stdlib-js/stdlib/pull/5320) _(by Saurabh Singh)_
-   [`bc90eba`](https://github.com/stdlib-js/stdlib/commit/bc90ebaf8e8318423f84cf652e1003836e898ab4) - **feat:** add C implementation for `stats/base/dists/uniform/mgf` [(#4142)](https://github.com/stdlib-js/stdlib/pull/4142) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`afa0a17`](https://github.com/stdlib-js/stdlib/commit/afa0a17b6d628f825151674c1c3848be2a16f5dc) - **test:** pass in missing `opts` argument [(#5794)](https://github.com/stdlib-js/stdlib/pull/5794) _(by Karan Anand)_
-   [`e1c0bd2`](https://github.com/stdlib-js/stdlib/commit/e1c0bd2a55ba108c5e77c99ab17117b9f6693508) - **chore:** address commit comment [(#5321)](https://github.com/stdlib-js/stdlib/pull/5321) _(by Harsh Yadav, Philipp Burckhardt)_
-   [`f7988d3`](https://github.com/stdlib-js/stdlib/commit/f7988d3c02e0eff3bd9bd7523b5dc975bb98dc0e) - **bench:** fix `isnan` checks in `stats/base/dists` [(#5296)](https://github.com/stdlib-js/stdlib/pull/5296) _(by Karan Anand)_
-   [`eebd899`](https://github.com/stdlib-js/stdlib/commit/eebd899ffc0b1517c40f105e1a21252a8e31c48b) - **style:** add missing space [(#5287)](https://github.com/stdlib-js/stdlib/pull/5287) _(by Rishav Tarway)_
-   [`c7bfa92`](https://github.com/stdlib-js/stdlib/commit/c7bfa923af0c5346766c90300e0d0a3c2188d438) - **docs:** fix missing ending `section` in various READMEs [(#5292)](https://github.com/stdlib-js/stdlib/pull/5292) _(by Saurabh Singh)_
-   [`d9c5d0c`](https://github.com/stdlib-js/stdlib/commit/d9c5d0c3343a0d0354d90d57f39638183bf3f51d) - **feat:** add C implementation for `stats/base/dists/uniform/stdev` [(#4133)](https://github.com/stdlib-js/stdlib/pull/4133) _(by Prashant Kumar Yadav, stdlib-bot)_
-   [`f0a9789`](https://github.com/stdlib-js/stdlib/commit/f0a978990a4e4cb1598203dd9b7a3e73665e82cd) - **feat:** add C implementation for `stats/base/dists/uniform/quantile` [(#4143)](https://github.com/stdlib-js/stdlib/pull/4143) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`e5880d1`](https://github.com/stdlib-js/stdlib/commit/e5880d18a941b1bb088cf9d55ee3e39a20e21938) - **feat:** add C implementation for `stats/base/dists/uniform/logcdf` [(#4140)](https://github.com/stdlib-js/stdlib/pull/4140) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`ac38037`](https://github.com/stdlib-js/stdlib/commit/ac3803778a758e68a576b497479babbfbafde973) - **feat:** add C implementation for `stats/base/dists/uniform/logpdf` [(#4141)](https://github.com/stdlib-js/stdlib/pull/4141) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`273d9f1`](https://github.com/stdlib-js/stdlib/commit/273d9f168ed5293a563e6748219f79a033e7ca8a) - **bench:** refactor random number generation in benchmarks for `stats/base/dists/uniform` [(#5176)](https://github.com/stdlib-js/stdlib/pull/5176) _(by Gaurav Jadhav, Philipp Burckhardt, stdlib-bot)_
-   [`e61b1de`](https://github.com/stdlib-js/stdlib/commit/e61b1dee3334bacf30d213de5b5f1c7868c0753b) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`b9a2014`](https://github.com/stdlib-js/stdlib/commit/b9a2014b1181d30f86aa489ba90ad1f892ade8e8) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`0806d8d`](https://github.com/stdlib-js/stdlib/commit/0806d8dd46ea52f7e95c12b1add6b3e01745711b) - **feat:** add C implementation for `stats/base/dists/uniform/kurtosis` [(#4132)](https://github.com/stdlib-js/stdlib/pull/4132) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`ba0c854`](https://github.com/stdlib-js/stdlib/commit/ba0c854e87d0e86d0f7739e26095ec0a0f40c36f) - **docs:** fix function names in C example code _(by Philipp Burckhardt)_
-   [`177f0a0`](https://github.com/stdlib-js/stdlib/commit/177f0a00909c097be05d47107a3e6ab05b865409) - **chore:** consistently use differential entropy for continuous distributions _(by Philipp Burckhardt)_
-   [`8ada47e`](https://github.com/stdlib-js/stdlib/commit/8ada47eedd19ea9f21a8edc342ee3583e92ac857) - **chore:** fix indentation _(by Philipp Burckhardt)_
-   [`33a4af8`](https://github.com/stdlib-js/stdlib/commit/33a4af8ea02d79120618cb4d50edb87d8aeab6a0) - **chore:** remove extra spaces _(by Philipp Burckhardt)_
-   [`97c434d`](https://github.com/stdlib-js/stdlib/commit/97c434de1ac819d4f616202b10ebdce3970a76d8) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`c4c4ed8`](https://github.com/stdlib-js/stdlib/commit/c4c4ed8abb88be48be587bcc9b9235e10de86aa4) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`1aa67dd`](https://github.com/stdlib-js/stdlib/commit/1aa67ddd1e238c681c845626c20b5377bd5e35aa) - **feat:** add C implementation for `stats/base/dists/uniform/median` [(#3970)](https://github.com/stdlib-js/stdlib/pull/3970) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`293cd1a`](https://github.com/stdlib-js/stdlib/commit/293cd1a2427ab5861d145f01c54c9c740048b438) - **feat:** add C implementation for `stats/base/dists/uniform/mean` [(#3964)](https://github.com/stdlib-js/stdlib/pull/3964) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`8553770`](https://github.com/stdlib-js/stdlib/commit/85537708442675d6bc1bf5dad5aaf252cecb82ac) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`4d6fbbd`](https://github.com/stdlib-js/stdlib/commit/4d6fbbd6ec73ee9d0ccb3bba1869f34d184329dd) - **feat:** add C implementation for `stats/base/dists/uniform/entropy` [(#4021)](https://github.com/stdlib-js/stdlib/pull/4021) _(by Divyansh Seth, Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`27824a1`](https://github.com/stdlib-js/stdlib/commit/27824a1f3c90218cfe5f3be923f8f879d98ed9dc) - **feat:** add C implementation for `stats/base/dists/uniform/pdf` [(#3949)](https://github.com/stdlib-js/stdlib/pull/3949) _(by Divyansh Seth, Philipp Burckhardt)_
-   [`ccbaa42`](https://github.com/stdlib-js/stdlib/commit/ccbaa42486fd36b15e2c17b0d30e0b0508f533d6) - **style:** fix formatting _(by Athan Reines)_
-   [`930ed98`](https://github.com/stdlib-js/stdlib/commit/930ed98207b9ae67f00b23917755589dbbd03fe5) - **feat:** add C implementation for `stats/base/dists/uniform/variance` [(#3951)](https://github.com/stdlib-js/stdlib/pull/3951) _(by Aayush Khanna)_
-   [`31fd427`](https://github.com/stdlib-js/stdlib/commit/31fd42744ec5d7073041f97c6f72350b8005c0fc) - **style:** remove unwanted empty lines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 11 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Devshree Bhati
-   Divyansh Seth
-   Gaurav Jadhav
-   Harsh Yadav
-   Karan Anand
-   Philipp Burckhardt
-   Prashant Kumar Yadav
-   Rishav Tarway
-   Saurabh Singh

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`867726b`](https://github.com/stdlib-js/stdlib/commit/867726bb7ef6851ca0986ecdb91bf5a5f246ee5a) - **docs:** update examples in `stats/base/dists/uniform` _(by Muhammad Haris, Philipp Burckhardt)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

