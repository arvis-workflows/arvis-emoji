import test from 'ava';
import arvishTest from 'arvish-test';

test('main', async t => {
	const arvish = arvishTest();

	const result = await arvish('node index.js gimme cats');

	t.deepEqual(result[0], {
		title: '🐱',
		arg: '🐱',
		icon: {
			path: ' '
		}
	});
});