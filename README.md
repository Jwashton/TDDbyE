# TDDbyE

Code samples from Test-Driven Development by Example, in various languages

## Thisless JavaScript

This ESNext implementation avoids the use of the keywords `this` and `new`. This limitation prevents the use of object state, and makes the language much more functional.

## Setup

The only preexisting requirement here is Node.js. Once you have Node installed and have cloned the code you can use Node's package manager, npm, to perform most operations.

Run `npm install` from within the project directory to install this project's dependencies, which include the testing and linting libraries used.

After installing dependencies, you can run tests through npm scripts. I have three defined for your convenience.

* `npm test` will run the test suite. If you would like to watch the tests, you can pass in a watch flag like so: `npm test -- --watch`.
* `npm run lint` will lint both the source and the tests.
* `npm run lint:watch` will watch the files and relint the whole project on save.

# Libraries used

The source for this project does not currently have any dependencies. It is pure modular ESNext. However, the project does have a couple of development dependencies. Example usage for all three of these tools can bee seen in the `scripts` attribute of my `project.json`, however I recommend running those scripts through npm as described above.

## Ava

The testing library I'm using is [Ava][ava]. Ava is designed for concurrent, asynchronous testing, and ships with Babel so that you can write your tests in ES2015 out of the box. I have set a couple flags to make sure that the entire project, and not just the tests, is precompiled from ES2015.

## ESLint

[ESLint][eslint] is a linting library for JavaScript. A couple months ago I took a few afternoons and built a personal lint config, considering every rule that ESLint provided at the time. I copied that config over to this project.

## ESLint-Watch

Unfortunately, ESLint does not have a native watch mode. This requires an external tool, namely, [eslint-watch]. This tool provides the `esw` command.

[ava]: https://ava.li
[eslint]: http://eslint.org
[eslint-watch]: https://www.npmjs.com/package/eslint-watch
