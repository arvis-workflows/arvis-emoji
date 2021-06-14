"use strict";
const arvish = require("arvish");

(async () => {
	const data = await arvish
		.fetch(
			`https://emoji-api.com/emojis?search=${arvish.input}&access_key=${process.argv[3]}`
		)
		.catch(console.error);

	let all = "";

	const items = data.map((item) => {
		const emoji = item.character;
		all += emoji;

		return {
			title: emoji,
			arg: emoji,
			icon: {
				path: " ", // Hide icon
			},
		};
	});

	items.push({
		title: all,
		arg: all,
		icon: {
			path: " ",
		},
	});

	arvish.output(items);
})();
