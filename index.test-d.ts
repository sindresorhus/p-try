import {expectType} from 'tsd';
import pTry from './index.js';

expectType<Promise<string>>(pTry(() => 'foo'));
expectType<Promise<number>>(pTry(async () => 1));
expectType<Promise<number>>(
	pTry((_string: string, _number: number) => 1, 'foo', 1),
);
