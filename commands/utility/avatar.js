const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'avatar',
			aliases: ['av', 'pfp', 'pic', 'profile', 'avtr'],
			description: 'Sends the profile picture of a user.',
			category: ['Utility'],
			usage: 'avatar <user>',
		})
	}

	run(message, [target]) {
		const member =
			message.mentions.members.last() ||
			message.guild.members.cache.get(target) ||
			message.member

		const userInfoEmbed = new MessageEmbed()
			.setColor('RANDOM')
			.setThumbnail(`${member.user.displayAvatarURL()}`)
			.setTitle(`${member.user.username}'s avatar!`)

		message.channel.send(userInfoEmbed)
	}
}
