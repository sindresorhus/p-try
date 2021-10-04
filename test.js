import test from 'ava';
import pTry from './index.js';

const fixture = Symbol('fixture');
const fixtureError = new Error('fixture');

test('main', async t => {
	t.is(await pTry(() => fixture), fixture);

	await t.throwsAsync(
		pTry(() => Promise.reject(fixtureError)),
		{
			message: fixtureError.message,
		},
	);

	await t.throwsAsync(pTry(() => {
		throw fixtureError;
	}), {
		message: fixtureError.message,
	});
});

test('allows passing arguments through', async t => {
	t.is(await pTry(argument => argument, fixture), fixture);
});
