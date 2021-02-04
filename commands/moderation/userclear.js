const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'userclear',
			aliases: [
				'upurge',
				'udelete',
				'udel',
				'usrpur',
				'userpurge',
				'usrdelete',
				'userdelete',
				'usrdel',
				'userdel',
			],
			description:
				'From the last 100 messages, deletes the an amount of messages from the user specified.',
			category: ['Moderation'],
			userPerms: 'MANAGE_MESSAGES',
			usage: 'userclear <user> <messages>',
		})
	}

	run(message, args) {
		const member =
			message.mentions.members.first() ||
			message.guild.members.cache.get(target)
		const messagesToDel = args[1]

		message.channel.messages
			.fetch({
				limit: 100,
			})
			.then((messages) => {
				var userMessages = []
				messages
					.filter((m) => m.author.id === member.id)
					.forEach((message) => {
						userMessages.push(message)
					})

				if (userMessages.length > messagesToDel) {
					userMessages.length = messagesToDel
				}

				message.channel.bulkDelete(userMessages).then(() => {
					message.channel.send(
						`Cleared ${messagesToDel} messages from ${member}`
					)
				})
			})
	}
}
