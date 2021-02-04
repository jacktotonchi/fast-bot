const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'bam',
			description: 'Bams a user',
			category: ['Fun'],
			usage: 'bam <user>',
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send("You didn't tell me who to bam")
		}
		message.channel.send('User has been bammed')
	}
}
