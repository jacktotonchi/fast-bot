const Command = require('../../structs/Command')
const ms = require('ms')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'remind',
			aliases: ['reminder', 'setreminder', 'timer'],
			description:
				'Remind yourself about something in a certain in a certain amount of time.',
			category: ['Utility'],
			usage: 'remind <thing> <duration>',
		})
	}

	run(message, args) {
		const person = message.member
		const time = args.pop()
		const reminder = args.join(' ')

		if (!time) {
			message.react('👎')
			return message.channel.send(
				'Please specify in how long you would like to be reminded!'
			)
		}

		person.send(`Don't forget to **"${reminder}"** in **${ms(ms(time))}**`)

		setTimeout(() => {
			person.send(`It's that time! Make sure to **"${reminder}"**`)
		}, ms(time))
	}
}
