const Command = require('../../structs/Command')
const owofy = require('owofy')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'owo',
			description: 'Wetuwns owo text',
			aliases: ['owo'],
			category: ['Fun'],
			usage: 'owoify <text>',
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send("You didn't teww me what to convewt")
		}
		message.channel.send(owofy(args.join(' ')))
	}
}
