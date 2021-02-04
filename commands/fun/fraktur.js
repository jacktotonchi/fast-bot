const Command = require('../../structs/Command')
const fraktur = require('fraktur')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'fraktur',
			description: 'Returns fraktur unicode text',
			category: ['Fun'],
			usage: 'fraktur <text>',
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send("𝔜𝔬𝔲 𝔡𝔦𝔡𝔫'𝔱 𝔱𝔢𝔩𝔩 𝔪𝔢 𝔴𝔥𝔞𝔱 𝔱𝔬 𝔠𝔬𝔫𝔳𝔢𝔯𝔱")
		}
		message.channel.send(fraktur.encode(args.join(' ')))
	}
}
