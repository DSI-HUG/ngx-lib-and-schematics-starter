<h1 align="center">
    @hug/ngx-lib-and-schematics-starter
</h1>

<p align="center">
    <br>
    <a href="https://www.hug.ch/">
        <img src="https://www.hug.ch/sites/all/themes/interhug/img/logos/logo-hug.svg" alt="hug-logo" height="54px" />
    </a>
    <br><br>
    <i>Start Angular libraries in no time and provide <a href="https://angular.io/guide/schematics-for-libraries">schematics</a> to<br>ease their integration with an Angular project</i>
    <br><br>
</p>

<p align="center">
    <a href="https://david-dm.org/DSI-HUG/ngx-lib-and-schematics-starter">
        <img src="https://img.shields.io/david/DSI-HUG/ngx-lib-and-schematics-starter.svg" alt="dependency status" />
    </a>
    <a href="https://david-dm.org/DSI-HUG/ngx-lib-and-schematics-starter?type=peer">
        <img src="https://img.shields.io/david/peer/DSI-HUG/ngx-lib-and-schematics-starter.svg" alt="peerDependency status" />
    </a>
    <a href="https://david-dm.org/DSI-HUG/ngx-lib-and-schematics-starter?type=dev">
        <img src="https://img.shields.io/david/dev/DSI-HUG/ngx-lib-and-schematics-starter.svg" alt="devDependency status" />
    </a>
</p>

<p align="center">
    <a href="https://github.com/DSI-HUG/ngx-lib-and-schematics-starter/blob/master/CONTRIBUTING.md#-submitting-a-pull-request-pr">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
    </a>
    <a href="https://github.com/DSI-HUG/ngx-lib-and-schematics-starter/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-GPLv3-ff69b4.svg" alt="license GPLv3" />
    </a>
</p>

<hr>

## Features

* Easily start an Angular library.
* Provide and package your library with schematics.
* Test your library and schematics using Karma / Jasmine.
* Seamless integration with Angular CLI (ng add).
* Seamless integration with GitHub (badges, workflows, issue templates).
* Community friendly (development guide, contribution, code of conduct).


## Usage

To help you get started right away simply follow these steps:

1. Download or clone this repository

3. Search and replace the following placeholders:

   * `LIBRARY_NAME` -> ex: @hug/libname or libname
   * `GITHUB_REPO_NAME` -> ex: DSI-HUG/libname

4. Update the library's guide

   * Open `README-LIB.md`
   * Update any `<!-- edit: -->` sections (ie. logo, description, installation, usage)

5. Update the package info

   * Open `./package.json`
   * Update any necessary info (ie. version, description, license, author, contributors, keywords, ...)

6. Update the library's github page ***(if any)***

   * Update the description and tags

7. And finally..

   * Remove `.git` folder ***(if any)***
   * Remove `README.md`
   * Rename `README-LIB.md` to `README.md`

You can now have a look at the [developer docs][developer] and start developing your library.


## Contributing

#### Want to Help?

Want to file a bug, contribute some code or improve documentation? Excellent!

But please read up first on the guidelines for [contributing][contributing], and learn about submission process, coding rules and more.

#### Code of Conduct

Please read and follow the [Code of Conduct][codeofconduct], and help us keep this project open and inclusive.


## Credits

[![love@hug](https://img.shields.io/badge/@hug-%E2%9D%A4%EF%B8%8Flove-magenta)][dsi-hug]




[developer]: https://github.com/DSI-HUG/ngx-lib-and-schematics-starter/blob/master/DEVELOPER.md
[contributing]: https://github.com/DSI-HUG/ngx-lib-and-schematics-starter/blob/master/CONTRIBUTING.md
[codeofconduct]: https://github.com/DSI-HUG/ngx-lib-and-schematics-starter/blob/master/CODE_OF_CONDUCT.md
[dsi-hug]: https://github.com/DSI-HUG
