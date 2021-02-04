const Command = require('../../structs/Command')
const ms = require('ms')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'tempban',
			aliases: ['tban'],
			description: 'Bans a user for a specified time or forever',
			category: ['Moderation'],
			userPerms: 'BAN_MEMBERS',
			usage: 'tempban <user> <duration>',
		})
	}

	run(message, args) {
		const person =
			message.mentions.members.first() ||
			message.guild.members.cache.get(target)
		const guild = message.guild.name

		const time = args[1]

		if (time) {
			person.send(`You have been banned for ${ms(ms(time))} in **${guild}**`)
			message.channel.send(`${person} has been banned for ${ms(ms(time))}`)
			setTimeout(() => {
				person.ban()
			}, 1500)
			setTimeout(() => {
				message.guild.members.unban(person)
			}, ms(time))
		} else {
			person.send(`You have been banned in **${guild}**`)
			message.channel.send(`${person} has been banned.`)
			person.ban()
		}
	}
}
