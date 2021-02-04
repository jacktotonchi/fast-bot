const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'github',
			aliases: ['git', 'gh', 'source', 'code', 'sourcecode'],
			description: 'Shows where to report an issue.',
			category: ['Utility'],
			usage: '<github>',
		})
	}

	run(message) {
		message.channel.send(
			"Wanna checkout the code which powers me? Here's a link! \n \n https://github.com/harshhhdev/fast-bot/ \n \n If you want to contribute to the code, feel free to! Make sure to read the contributing guidelines specified."
		)
	}
}
