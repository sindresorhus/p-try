'use strict';

const pTry = (entry, ...arguments_) => {
	const invokable = typeof entry === 'function';

	return invokable ?
		new Promise(resolve => {
			resolve(entry(...arguments_));
		}) :
		Promise.resolve(entry);
};

module.exports = pTry;

module.exports.default = pTry;
