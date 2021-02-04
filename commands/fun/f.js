const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'f',
			description: 'Pays respects.',
			category: ['Fun'],
		})
	}

	run(message) {
		message.channel.send('f')
	}
}
