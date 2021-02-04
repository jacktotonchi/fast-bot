const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'bug',
			aliases: ['issue', 'problem'],
			description: 'Shows where to report an issue.',
			category: ['Utility'],
			usage: 'bug',
		})
	}

	run(message) {
		message.channel.send(
			'Did I break down? Feel free to open up an issue so my developer can fix it! Please be clear and concise on what the issue is. \n \n https://github.com/harshhhdev/fast-bot/issues'
		)
	}
}
