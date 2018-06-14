import test from 'ava';
import m from '.';

const fixture = Symbol('fixture');
const fixtureErr = new Error('fixture');

test('main', async t => {
	t.is(await m(() => fixture), fixture);

	await t.throws(m(() => Promise.reject(fixtureErr)), fixtureErr.message);

	await t.throws(m(() => {
		throw fixtureErr;
	}), fixtureErr.message);
});

test('allows passing arguments through', async t => {
	t.is(await m(a => a, fixture), fixture);
});
