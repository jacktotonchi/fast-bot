const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'ban',
			description: 'Bans a user to prevent entry into server',
			category: ['Moderation'],
			userPerms: 'BAN_MEMBERS',
			usage: 'ban <user> [reason]',
		})
	}

	run(message, args) {
		const member = message.mentions.members.first()

		args.shift()
		let reason = args.join(' ')

		if (!member) {
			message.react('👎')
			return message.channel.send("I couldn't find the user you wanted to ban.")
		}
		if (!reason) {
			reason = 'no reason specified'
		}

		member.send(
			`You have been permanently banned in **${message.guild.name}** for **${reason}.**`
		)
		setTimeout(() => {
			member.ban().then(() => {
				const banEmbed = new MessageEmbed()
					.setColor('RED')
					.setTitle('**User Banned**')
					.addField('User', member, true)
					.addField('Reason', reason, true)
					.addField('Banned By', message.member, true)
					.setTimestamp()

				message.channel.send(banEmbed)
			})
		}, 1000)
	}
}
