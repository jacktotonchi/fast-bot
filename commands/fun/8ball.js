const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: '8ball',
			aliases: ['8b', 'will'],
			description: 'Predicts the future',
			category: ['Fun'],
			usage: '8ball <question>',
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send("You didn't ask me a question")
		}
		let eightball = [
			'Certainly.',
			'It is decidedly so.',
			'Without a doubt.',
			'Yes definitely.',
			'Probably.',
			'As I see it, yes.',
			'Most likely.',
			'Outlook good.',
			'Yes.',
			'Signs point to yes.',
			"Yes'nt",
			"No'nt",
			'Maybe.',
			'My conscience says no.',
			'Yep.',
			'Nah.',
			'My reply is no.',
			'My sources say no.',
			'Outlook not so good.',
			'Very doubtful.',
			'No way.',
			'Maybe',
			'The answer is hiding inside you',
			'No.',
			'Nope.',
			'If it rains today, then yes.',
			"It's over",
			"It's just the beginning",
			'Probably not.',
		]
		let index = Math.floor(Math.random() * Math.floor(eightball.length))
		message.channel.send(`**${args.join(' ')}** \n \n ${eightball[index]}`)
	}
}
