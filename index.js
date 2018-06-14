'use strict';
module.exports = (cb, ...args) => new Promise(resolve => {
	resolve(cb(...args));
});
