const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')
const covidapi = require('covidapi')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'covid',
			description: 'Get coronavirus stats for a specified location.',
			aliases: ['cov', 'corona', 'c19', 'coronavirus'],
			category: ['Fun'],
			usage: 'cov <country>',
		})
	}

	async run(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send(
				"Please tell me which country's covid information you would like!"
			)
		} else {
			const countrycovid = args.join(' ')
			const data = await covidapi.countries({ country: countrycovid })

			if (data.cases === undefined) {
				message.react('👎')
				return message.channel.send(
					`Unable to fetch covid-19 stats for **"${countrycovid}"**`
				)
			}

			const countryCovidEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle(`Covid-19 stats for "${countrycovid}"`)
				.addField('Cases', data.cases, true)
				.addField('Active Cases', data.active, true)
				.addField('Deaths', data.deaths, true)
				.addField('Recovered', data.recovered, true)

			message.channel.send(countryCovidEmbed)
		}
	}
}
