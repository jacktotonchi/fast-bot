const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'channel',
			aliases: ['chan', 'channelinfo'],
			description: 'Gives info about a channel.',
			category: ['Utility'],
			usage: 'channel [channel]',
		})
	}

	run(message, [target]) {
		let channel =
			message.mentions.channels.first() ||
			message.guild.channels.cache.get(target)

		if (!channel) {
			channel = message.channel
		}

		const channelEmbed = new MessageEmbed()
			.setThumbnail(message.guild.iconURL)
			.setTitle('Channel Info')
			.addField(
				':arrow_right: Name',
				channel.type === 'dm'
					? `<@${channel.recipient.username}>`
					: channel.name,
				true
			)
			.addField(':arrow_right: ID', channel.id, true)
			.addField(
				':arrow_right: Creation Date',
				channel.createdAt.toDateString(),
				true
			)
			.addField(':arrow_right: NSFW', channel.nsfw ? 'Yes' : 'No', true)
			.addField(
				':arrow_right: Category',
				channel.parent ? channel.parent.name : 'None',
				true
			)
			.addField(':arrow_right: Topic', channel.topic || 'None', true)
			.setColor('RANDOM')

		message.channel.send(channelEmbed)
	}
}
