const Command = require('../../structs/Command')
const ms = require('ms')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'productivemute',
			aliases: ['prodmute'],
			description:
				'Force yourself to stop talking in the name of productivity,',
			category: ['Utility'],
			usage: 'productivemute <duration>',
		})
	}

	run(message, args) {
		const person = message.member
		let time = args[0]
		const guild = message.guild.name

		const role = message.guild.roles.cache.find((role) => role.name === 'muted')
		if (!role) return message.channel.send('Could not find a mute role!')

		if (!time) {
			message.react('👎')
			return message.channel.send(
				'Please specify how long you would like to stay muted!'
			)
		}

		person.roles.add(role.id)
		message.channel.send(
			`You have commited productivity mute in **${guild}** for **${ms(
				ms(time)
			)}**`
		)

		if (ms(time) > 86400000) time = 86400000

		setTimeout(() => {
			person.roles.remove(role.id)
			person.send(
				`Your ${ms(ms(time))} productivity mute has ended in **${guild}**.`
			)
		}, ms(time))
	}
}
