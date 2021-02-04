const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'poll',
			aliases: ['vote'],
			description: 'Generates a simple yes or no poll.',
			category: ['Utility'],
			usage: '<poll> question',
		})
	}

	run(message, args) {
		let msgArgs = args.join(' ')

		if (!args[0]) {
			message.react('👎')
			return message.channel.send(
				'Please tell me what you would like the poll to ask!'
			)
		}

		message.channel
			.send(`**${msgArgs}${msgArgs.endsWith('?') ? '' : '?'}**`)
			.then((messageReaction) => {
				messageReaction.react('👍'), messageReaction.react('👎')
			})
		message.delete()
	}
}
