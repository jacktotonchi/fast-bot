const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'unban',
			aliases: ['unb'],
			description: 'Revokes the ban from a user',
			category: ['Moderation'],
			userPerms: 'BAN_MEMBERS',
			usage: 'unban <userid>',
		})
	}

	run(message, args) {
		const member = args[0]

		if (!member) {
			message.react('👎')
			return message.channel.send(
				"I couldn't find the user you wanted to unban. Please tell me their ID."
			)
		}

		if (member.length != 18) {
			message.react('👎')
			return message.channel.send(
				'Invalid user. Please tell me the ID of the user you would like to unban.'
			)
		}

		message.guild.members.unban(member).then(() => {
			const unbanEmbed = new MessageEmbed()
				.setTitle('Unbanned User')
				.setColor('GREEN')
				.addField('Unbanned User', `<@${member}>`)
				.addField('Unbanned By', message.member)

			message.channel.send(unbanEmbed)
		})
	}
}
