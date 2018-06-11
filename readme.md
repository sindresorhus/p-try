# p-try [![Build Status](https://travis-ci.org/sindresorhus/p-try.svg?branch=master)](https://travis-ci.org/sindresorhus/p-try)

> [`Promise.try()`](https://github.com/tc39/proposal-promise-try) [ponyfill](https://ponyfill.com) - Starts a promise chain

[How is it useful?](http://cryto.net/~joepie91/blog/2016/05/11/what-is-promise-try-and-why-does-it-matter/)


## Install

```
$ npm install p-try
```


## Usage

```js
const pTry = require('p-try');

pTry(() => {
	return synchronousFunctionThatMightThrow();
}).then(value => {
	console.log(value);
}).catch(error => {
	console.error(error);
});
```


## API

### pTry(fn, ...args)

Returns a `Promise` resolved with the value of calling `fn(...args)`. If the function throws an error, the returned `Promise` will be rejected with that error.


## Related

- [p-finally](https://github.com/sindresorhus/p-finally) - `Promise#finally()` ponyfill - Invoked when the promise is settled regardless of outcome
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
