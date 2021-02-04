const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')
const weather = require('weather-js')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'weather',
			description: 'Get the weather of a specified place',
			aliases: ['weath', 'temp', 'temperature'],
			category: ['Fun'],
			usage: 'temp <city>',
		})
	}

	run(message, args) {
		weather.find(
			{ search: args.join(' '), degreeType: 'C' },
			function (err, result) {
				if (err) return console.log(err)
				if (!args[0]) {
					message.react('👎')
					return message.channel.send('Please specify a location!')
				}

				if (result == undefined || result.length === 0)
					return message.channel.send(
						"I couldn't find the location you specified. Double check the spelling."
					)

				const current = result[0].current
				const location = result[0].location

				const weatherInfo = new MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`${current.skytext}`)
					.setAuthor(`Weather forcast for ${current.observationpoint}`)
					.setThumbnail(current.imageUrl)
					.addField('Timezone', `UTC${location.timezone}`, true)
					.addField('Degree Type', 'Celsius', true)
					.addField('Temperature', `${current.temperature}°`, true)
					.addField('Wind', current.winddisplay, true)
					.addField('Feels like', `${current.feelslike}°`, true)
					.addField('Humidity', `${current.humidity}%`, true)

				message.channel.send(weatherInfo)
			}
		)
	}
}
