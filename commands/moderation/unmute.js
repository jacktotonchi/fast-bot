const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'unmute',
			aliases: ['unshut'],
			description: 'Removes mute from a user',
			category: ['Moderation'],
			userPerms: 'MANAGE_ROLES',
			usage: 'unmute <user>',
		})
	}

	run(message, [target]) {
		const person =
			message.mentions.members.first() ||
			message.guild.members.cache.get(target)
		const guild = message.guild.name

		const role = message.guild.roles.cache.find((role) => role.name === 'muted')
		if (!role) return message.channel.send('Could not find a mute role!')

		person.roles.remove(role.id).then(() => {
			const unmuteEmbed = new MessageEmbed()
				.setColor('GREEN')
				.setTitle('**Unmuted User**')
				.addField('User', person, true)
				.addField('Unmuted By', message.member, true)
				.setTimestamp()

			message.channel.send(unmuteEmbed)
			person.send(`You have been unmuted in **${guild}**`)
		})
	}
}
