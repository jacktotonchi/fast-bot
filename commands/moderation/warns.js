const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

const mongo = require('./../../schemas/mongoMain')
const warnSchema = require('./../../schemas/warnSchema')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'warns',
			aliases: ['logs', 'listwarn'],
			description: 'Get warning logs for a user.',
			category: ['Moderation'],
			usage: 'warns <user>',
		})
	}

	async run(message, [target]) {
		const person =
			message.mentions.members.first() ||
			message.guild.members.cache.get(target)

		if (!person) {
			mesage.react('👎')
			return message.channel.send('Please tell me whom to warn')
		}

		const guildId = message.guild.id
		const userId = person.id

		function timeDifference(current, previous) {
			const msPerMinute = 60 * 1000
			const msPerHour = msPerMinute * 60
			const msPerDay = msPerHour * 24
			const msPerMonth = msPerDay * 30
			const msPerYear = msPerDay * 365

			var elapsed = current - previous

			if (elapsed < msPerMinute) {
				return Math.round(elapsed / 1000) + ' seconds ago'
			} else if (elapsed < msPerHour) {
				return Math.round(elapsed / msPerMinute) + ' minutes ago'
			} else if (elapsed < msPerDay) {
				return Math.round(elapsed / msPerHour) + ' hours ago'
			} else if (elapsed < msPerMonth) {
				return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago'
			} else if (elapsed < msPerYear) {
				return (
					'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago'
				)
			} else {
				return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago'
			}
		}

		await mongo().then(async (mongoose) => {
			const warnings = new MessageEmbed()
				.setTitle(`Warnings issued to ${person.tag}`)
				.setColor('RED')
				.setTimestamp()

			try {
				const results = await warnSchema.findOne({
					guildId,
					userId,
				})

				if (!results)
					return message.channel.send('This user has been good! No warnings.')

				for (const warning of results.warnings) {
					const { author, timestamp, reason } = warning

					const currentTimeStamp = new Date().getTime()

					warnings.addField(
						`[${timeDifference(currentTimeStamp, timestamp)}] by ${author}`,
						`**${reason}**`
					)
				}

				message.channel.send(warnings)
			} finally {
				mongoose.connection.close()
			}
		})
	}
}
