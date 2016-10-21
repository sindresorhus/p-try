import test from 'ava';
import m from './';

const fixture = Symbol('fixture');
const fixtureErr = new Error('fixture');

test(async t => {
	t.is(await m(() => fixture), fixture);

	await t.throws(m(() => Promise.reject(fixtureErr)), fixtureErr.message);

	await t.throws(m(() => {
		throw fixtureErr;
	}), fixtureErr.message);
});
