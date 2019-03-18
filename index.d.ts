/**
Start a promise chain.

@param callback - The function to run to start the promise chain.
@param arguments - Arguments to pass to `callback`.
@returns Is resolved with the value of calling `callback(...arguments)`. If the function throws an error, the returned `Promise` will be rejected with that error.
*/
export default function pTry<ValueType, ArgumentsType extends unknown[]>(
	callback: (...arguments: ArgumentsType) => PromiseLike<ValueType> | ValueType,
	...arguments: ArgumentsType
): Promise<ValueType>;
