'use strict';
const arvish = require('@jopemachine/arvish');

(async () => {
	const data = await arvish.fetch('https://emoji.getdango.com/api/emoji', {
		query: {
			q: arvish.input
		}
	});

	let all = '';

	const items = data.results.map(item => {
		const emoji = item.text;
		all += emoji;

		return {
			title: emoji,
			arg: emoji,
			icon: {
				path: ' ' // Hide icon
			}
		};
	});

	items.push({
		title: all,
		arg: all,
		icon: {
			path: ' '
		}
	});

	arvish.output(items);
})();

