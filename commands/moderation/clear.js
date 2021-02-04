const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'clear',
			aliases: ['purge', 'delete', 'del'],
			description: 'Deletes a certain amount of messages from chat.',
			category: ['Moderation'],
			userPerms: 'MANAGE_MESSAGES',
			usage: 'clear <number of messages>',
		})
	}

	run(message, args) {
		let deleteAmount

		if (parseInt(args[0]) > 100) deleteAmount = 100
		else deleteAmount = parseInt(args[0])

		if (isNaN(deleteAmount)) {
			message.react('👎')
			return message.channel.send(
				'Please enter a valid number of messages for me to delete'
			)
		}

		message.channel.bulkDelete(deleteAmount, true).then(() => {
			message.channel
				.send(`I've deleted ${deleteAmount} messages`)
				.then((msg) => {
					setTimeout(() => {
						msg.delete()
					}, 5000)
				})
		})
	}
}
