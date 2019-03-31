import {expectType} from 'tsd';
import pTry = require('.');

expectType<Promise<string>>(pTry(() => 'foo'));
expectType<Promise<number>>(pTry(() => Promise.resolve(1)));
expectType<Promise<number>>(
	pTry((string: string, number: number) => 1, 'foo', 1)
);
