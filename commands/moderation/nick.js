const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'nick',
			aliases: ['name', 'setnick', 'changenick', 'nickname'],
			description: 'Changes or removes a nickname from a user',
			category: ['Moderation'],
			userPerms: 'MANAGE_NICKNAMES',
			usage: 'nick <user> <new nickname>',
		})
	}

	run(message, args) {
		const p = message.mentions.users.first()

		if (!p) {
			message.react('👎')
			return message.channel.send(
				"I couldn't find the user who's nickname you wanted to change."
			)
		}
		const person = message.guild.members.cache.get(p.id)

		args.shift()

		let name = args.join(' ')

		person
			.setNickname(name)
			.then(() =>
				message.channel.send(
					name === ''
						? `Reset the nickname of ${person}`
						: `Changed the nickname of ${person} to ${name}`
				)
			)
	}
}
