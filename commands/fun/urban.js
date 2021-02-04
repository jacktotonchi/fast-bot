const Command = require('../../structs/Command')
const urban = require('urban')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'urban',
			aliases: [
				'urb',
				'def',
				'dict',
				'urbdict',
				'urbdef',
				'define',
				'dictionary',
				'urbandictionary',
			],
			description: 'Gets the definition of a word from the Urban Dictionary.',
			category: ['Fun'],
			usage: 'urban <word>',
		})
	}

	run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send("You didn't give me a word")
		}
		let word = args.join(' ')

		urban(word).first((json) => {
			if (!json) {
				message.react('👎')
				return message.channel.send('That word does not exist')
			}
			const def = new MessageEmbed()
				.setTitle(json.word)
				.setDescription(json.definition)
				.addField('Upvotes', json.thumbs_up, true)
				.addField('Downvotes', json.thumb_down, true)
				.setTimestamp(new Date())
				.setFooter(`Written by ${json.author}`)
				.setColor('RANDOM')

			message.channel.send(def)
		})
	}
}
