const Command = require('../../structs/Command')
const aesthetics = require('aesthetics')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'aesthetics',
			aliases: ['width', 'widthtxt', 'ast'],
			description: 'Returns wide text',
			category: ['Fun'],
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send(
				'Ｙｏｕ　ｄｉｄｎ＇ｔ　ｔｅｌｌ　ｍｅ　ｗｈａｔ　ｔｏ　ｃｏｎｖｅｒｔ'
			)
		}
		message.channel.send(aesthetics(args.join(' ')))
	}
}
