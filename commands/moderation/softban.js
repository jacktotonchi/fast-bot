const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'softban',
			aliases: ['sobn'],
			description: 'Ban and immediately unban a user',
			category: ['Moderation'],
			userPerms: 'BAN_MEMBERS',
			usage: 'softban <user>',
		})
	}

	run(message, args) {
		const member =
			message.mentions.members.last() || message.guild.members.cache.get(target)

		args.shift()
		let reason = args.join(' ')

		if (!reason) {
			reason = 'undefined'
		}

		if (!member) {
			message.react('👎')
			return message.channel.send(
				"I couldn't find the user you wanted to softban."
			)
		}

		member.send(`You have been softbanned in **${message.guild.name}`)

		setTimeout(() => {
			member.ban().then(() => {
				const SoftbanEmbed = new MessageEmbed()
					.setColor('RED')
					.setTitle('User softbanned')
					.setDescription(
						'The user was banned, and the automatically unbanned.'
					)
					.addField('Softbanned By', message.member)
					.addField('User', member)
					.setTimestamp()

				message.channel.send(SoftbanEmbed)

				message.guild.members.unban(member)
			})
		}, 100)
	}
}
