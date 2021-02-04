const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'diceroll',
			aliases: ['rolldice', 'dice'],
			description: 'Rolls a 6 sided dice.',
			category: ['Fun'],
		})
	}

	run(message) {
		let randomDice = Math.floor(Math.random() * Math.floor(6))

		if (randomDice == 0) randomDice = 1

		let response = `I rolled a ${randomDice}!`

		message.channel.send(response)
	}
}
