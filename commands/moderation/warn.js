const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')

const mongo = require('./../../schemas/mongoMain')
const warnSchema = require('./../../schemas/warnSchema')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'warn',
			description: 'Issue a warning to a user.',
			category: ['Moderation'],
			userPerms: 'MANAGE_CHANNELS',
			usage: 'warn <user> <reason>',
		})
	}

	async run(message, args) {
		const target = message.mentions.users.first()
		args.shift()

		const guildId = message.guild.id
		const userId = target.id

		const reason = args.join(' ')

		if (!target) {
			message.react('👎')
			return message.channel.send('Please tell me whom to warn')
		}

		const warning = {
			author: message.member.user.tag,
			timestamp: new Date().getTime(),
			reason,
		}

		await mongo().then(async (mongoose) => {
			try {
				await warnSchema.findOneAndUpdate(
					{
						guildId,
						userId,
					},
					{
						guildId,
						userId,
						$push: {
							warnings: warning,
						},
					},
					{
						upsert: true,
					}
				)

				const warnEmbed = new MessageEmbed()
					.setColor('RED')
					.setTitle('Warned User')
					.addField('Warned By', message.member)
					.addField('Warned for', reason)
					.setFooter(`++warns ${target.username} to view their warnings`)
					.setTimestamp()

				message.channel.send(warnEmbed)
			} finally {
				mongoose.connection.close()
			}
		})
	}
}
