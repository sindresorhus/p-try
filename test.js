import test from 'ava';
import pTry from '.';

const fixture = Symbol('fixture');
const fixtureError = new Error('fixture');

test('try with a function', async t => {
	t.is(await pTry(() => fixture), fixture);

	await t.throwsAsync(pTry(() => Promise.reject(fixtureError)), fixtureError.message);

	await t.throwsAsync(pTry(() => {
		throw fixtureError;
	}), fixtureError.message);

	// Allows passing arguments through
	t.is(await pTry(argument => argument, fixture), fixture);
});

test('try with a object', async t => {
	t.is(await pTry(0), 0);

	// Promise thenable
	t.is(await pTry(0).then(val => ++val), 1);

	const p = pTry(fixture);
	t.is(await pTry(p), fixture);
});
