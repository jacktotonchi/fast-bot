const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'coinflip',
			aliases: ['flip'],
			description: 'Flips a coin',
			category: ['Fun'],
		})
	}

	run(message) {
		let random = Math.floor(Math.random() * Math.floor(2))

		if (random == 0) message.channel.send('I flipped tails!')
		else message.channel.send('I flipped heads!')
	}
}
