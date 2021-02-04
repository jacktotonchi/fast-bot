const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'server',
			aliases: [
				'guild',
				'serv',
				'serverinfo',
				'svinfo',
				'sv',
				'guildinfo',
				'servinfo',
			],
			description: 'Basic statistics of the server.',
			category: ['Utility'],
			usage: 'server',
		})
	}

	run(message) {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Server Info')
			.setThumbnail(message.guild.iconURL)
			.addField(':arrow_right: Name', message.guild.name, true)
			.addField(':arrow_right: ID', message.guild.id, true)
			.addField(
				':arrow_right: Region',
				message.guild.region.toUpperCase(),
				true
			)
			.addField(
				':arrow_right: Creation Date',
				message.guild.createdAt.toDateString(),
				true
			)
			.addField(':arrow_right: Owner', message.guild.owner.user.tag, true)
			.addField(':arrow_right: Members', message.guild.memberCount, true)
			.addField(
				':arrow_right: Channels',
				message.guild.channels.cache
					.filter((channel) => channel.type !== 'category')
					.map((channel) => channel.toString())
					.join(' **|** '),
				true
			)

		return message.channel.send(embed)
	}
}
