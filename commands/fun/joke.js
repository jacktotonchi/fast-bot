const Command = require('../../structs/Command')
const jokes = require('discord-jokes')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'joke',
			aliases: ['funny', 'dadjoke'],
			description: 'A probably chuckle worthy dad joke.',
			category: ['Fun'],
		})
	}

	run(message) {
		jokes.getRandomDadJoke((joke) => {
			message.channel.send(joke)
		})
	}
}
