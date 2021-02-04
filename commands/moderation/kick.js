const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'kick',
			description: 'Removes a member from the server',
			category: ['Moderation'],
			userPerms: 'KICK_MEMBERS',
			usage: 'clear <number of messages>',
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
			reason = 'undefined'
		}

		member.send(
			`You have been kicked from **${message.guild.name}** for **${reason}.**`
		)
		setTimeout(() => {
			member.kick().then(() => {
				const kickEmbed = new MessageEmbed()
					.setColor('#C80000')
					.setTitle('**User Kicked**')
					.addField('User', member, true)
					.addField('Reason', reason, true)
					.addField('Kicked By', message.member, true)
					.setTimestamp()

				message.channel.send(kickEmbed)
			})
		}, 1000)
	}
}
