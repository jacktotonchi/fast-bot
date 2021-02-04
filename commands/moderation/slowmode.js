const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'slowmode',
			aliases: ['slow', 'swm', 'setslow', 'setswm', 'setslowmode'],
			description: 'Add a slowmode to the chat.',
			category: ['Moderation'],
			userPerms: 'MANAGE_CHANNELS',
			usage: 'slowmode <time>',
		})
	}

	run(message, args) {
		const time = args[0]
		if (!time) {
			message.react('👎')
			return message.channel.send(
				"Please enter how much slowmode you'd like for me to add!"
			)
		}

		message.channel.setRateLimitPerUser(time, 'reason')
	}
}
