const Command = require('../../structs/Command')
const translate = require('@vitalets/google-translate-api')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'translate',
			aliases: ['trans'],
			description: 'Translates from one language to another',
			category: ['Fun'],
			usage: 'trans <text> <language>',
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send(
				'Please tell me what you would like to translate, and to which language! Type `h `'
			)
		}
		const languageToTranslate = args.pop()
		const textToTranslate = args.join(' ')

		if (!textToTranslate) {
			message.react('👎')
			return message.channel.send(
				'Please tell me which text you would like to translate.'
			)
		} else if (!languageToTranslate) {
			message.react('👎')
			return message.channel.send('Please specify a language!')
		}

		translate(textToTranslate, { to: languageToTranslate }).then((res) => {
			message.channel.send(
				`To say "${textToTranslate}" in ${languageToTranslate}, we say "${res.text}"`
			)
		})
	}
}
