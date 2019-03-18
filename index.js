'use strict';

const pTry = (callback, ...arguments_) => new Promise(resolve => {
	resolve(callback(...arguments_));
});

module.exports = pTry;
module.exports.default = pTry;
