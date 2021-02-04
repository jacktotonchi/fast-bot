const Command = require('../../structs/Command')
const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'mute',
			aliases: ['shut'],
			description: 'Mute a user for a specified time or forever',
			category: ['Moderation'],
			userPerms: 'MANAGE_ROLES',
			usage: 'mute <user> [time]',
		})
	}

	run(message, args) {
		const p = message.mentions.users.first()
		if (!p) {
			message.react('👎')
			return message.channel.send(
				"I couldn't find the user you wanted to mute."
			)
		}
		const person = message.guild.members.cache.get(p.id)
		const guild = message.guild.name

		const role = message.guild.roles.cache.find((role) => role.name === 'muted')
		if (!role) {
			message.react('👎')
			return message.channel.send('Could not find a mute role!')
		}

		let time = args[1]

		if (time) {
			if (isNaN(time.slice(0, -1))) {
				message.react('👎')
				return message.channel.send('Please put in a valid time!')
			} else {
				person.roles.add(role.id).then(() => {
					const muteEmbed = new MessageEmbed()
						.setColor('RED')
						.setTitle('Muted User')
						.addField('User', person, true)
						.addField('Duration', time, true)
						.addField('Muted By', message.member, true)
						.setTimestamp()

					message.channel.send(muteEmbed)
					person.send(`You have been muted for ${ms(ms(time))} in **${guild}**`)
					setTimeout(() => {
						person.roles.remove(role.id)
						return person.send(`You have been unmuted in **${guild}**.`)
					}, ms(time))
				})
			}
		} else {
			person.roles.add(role.id).then(() => {
				const muteEmbed = new MessageEmbed()
					.setColor('RED')
					.setTitle('Muted User')
					.addField('User', person, true)
					.addField('Duration', 'Permanent', true)

				message.channel.send(muteEmbed)
				person.send(`You have been muted in **${guild}**`)
			})
		}
	}
}
