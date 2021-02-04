const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'removeslowmode',
			aliases: ['noslow', 'noswm', 'removeslow', 'removeswm', 'clearslowmode'],
			description: 'Removes slowmode from current chat.',
			category: ['Moderation'],
			userPerms: 'MANAGE_CHANNELS',
			usage: 'removeslowmode',
		})
	}

	run(message) {
		message.channel
			.setRateLimitPerUser(0, 'reason')
			.then(() =>
				message.channel.send(`✅ Removed slowmode from ${message.channel}`)
			)
	}
}
