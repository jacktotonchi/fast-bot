const Command = require('../../structs/Command')
const urban = require('urban')
const { MessageEmbed } = require('discord.js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'randurban',
			aliases: [
				'randurb',
				'randdef',
				'randdict',
				'randurbdict',
				'randurbdef',
				'randdefine',
				'randdictionary',
				'randurbandictionary',
			],
			description: 'Gets a random word definition from Urban Dictionary',
			category: ['Fun'],
			cooldown: 5,
		})
	}

	run(message) {
		urban.random().first((json) => {
			const def = new MessageEmbed()
				.setTitle(json.word)
				.setDescription(json.definition)
				.addField('Upvotes', json.thumbs_up, true)
				.addField('Downvotes', json.thumbs_down, true)
				.setTimestamp(new Date())
				.setFooter(`Written by ${json.author}`)
				.setColor('RANDOM')

			message.channel.send(def)
		})
	}
}
