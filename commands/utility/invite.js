const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'invite',
			aliases: ['inv', 'serverinvite'],
			description: 'Generates a random server invite.',
			category: ['Utility'],
			usage: 'invite [temp]',
		})
	}

	run(message, args) {
		message.channel
			.createInvite({
				unique: true,
				temporary: args[0] === 'temp' ? true : false,
			})
			.then((invite) => {
				message.channel.send(
					`Here's a${
						args[0] === 'temp' ? ' temporary' : ''
					} server invite ${invite}`
				)
			})
	}
}
